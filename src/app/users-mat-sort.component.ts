import {Component, ViewChild} from '@angular/core'
import {UserQuery, UserService} from './user.service'
import {PaginationDataSource} from 'ngx-pagination-data-source'
import {User} from './user'
import {MatSort, Sort} from "@angular/material/sort";

@Component({
  selector: 'users-mat-sort',
  templateUrl: './users-mat-sort.component.html',
  styleUrls: [`./users-mat-sort.component.scss`]
})
export class UsersMatSortComponent {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns = ['id', 'username', 'email', 'registration']

  data = new PaginationDataSource<User, UserQuery>(
      (request, query) => this.users.page(request, query),
      {property: 'username', order: 'asc'},
      {search: '', registration: undefined},
      2
  )

  constructor(private users: UserService) {
  }

  sortBy({active, direction}: Sort) {
    this.data.sortBy({
      property: active as keyof User,
      order: direction || 'asc'
    })
  }
}
