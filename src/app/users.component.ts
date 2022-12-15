import {Component} from '@angular/core'
import {UserQuery, UserService} from './user.service'
import {PaginationDataSource} from 'ngx-pagination-data-source'
import {User} from './user'

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: [`./users.component.scss`]
})
export class UsersComponent {
  displayedColumns = ['id', 'username', 'email', 'registration']

  data = new PaginationDataSource<User, UserQuery>(
      (request, query) => this.users.page(request, query),
      {property: 'username', order: 'asc'},
      {search: '', registration: undefined},
      2
  )

  constructor(private users: UserService) {

  }
}
