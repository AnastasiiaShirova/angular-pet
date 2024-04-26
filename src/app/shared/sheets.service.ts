import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, catchError, filter, map, Observable, of, Subject, switchMap} from "rxjs";
import {ProductInfo} from "./interfaces/product-card.interface";
import {Categories} from "./enums/categories.enum";

const SHEET_URL = 'https://sheetdb.io/api/v1/9j1pa1if6s2s7'
@Injectable({
  providedIn:'root'
})

export class SheetsService {
  constructor(private http: HttpClient) {
  }

  selectCategory = new BehaviorSubject<Categories | null>(null); // чтобы отдавать данные
  filteredCategories = this.selectCategory.asObservable().pipe(
    switchMap((category) => this.filterSheet(category))
  ); //чтобы получать данные

  getSheet(): Observable<ProductInfo[]> {
    return this.http.get<any>(SHEET_URL).pipe(
      map((value) => value.map((item: any) => ({
          ...item, id: +item.id,
          availability: !!item.availability, quantity: +item.quantity, price: +item.price
        }))
      ),
      catchError(() => {
        return of([
          {
            id: 15,
            name: "Мандарины",
            photo: "https://frutsnab.ru/wa-data/public/shop/products/62/00/62/images/160/160.970.jpg",
            weight: "600 гр",
            price: 180,
            availability: true,
            quantity: 18,
            category: "Фрукты"
          },
        ])
      }),
    );
  }

  filterSheet(category: Categories | null): Observable<any> {
    return this.getSheet().pipe(
      map((value) => {
          if (!category) {
            return value
          }
          return value.filter((item) => item.category === category)
        }
      ))
  }

  addProduct(productInfo: ProductInfo): Observable<any> {
    return this.http.post<any>(SHEET_URL, {
      data: [
        productInfo
      ]
    })
  }
}
