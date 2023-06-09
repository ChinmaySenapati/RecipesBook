import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  // @Output() featureSelected = new EventEmitter<string>();
  private userSub: Subscription;
  collapsed = true;
  isAuthenticated = false;
  // onSelect(feature: string) {
  //   this.featureSelected.emit(feature);
  // }
  constructor(
    private dataStorageServise: DataStorageService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !user ? false : true; //or this.isAuthenticated = !!user;
      //console.log(!user);
      //console.log(!!user);
    });
  }

  onSaveData() {
    this.dataStorageServise.storeRecipe();
  }

  onFetchData() {
    this.dataStorageServise.fetchRecipes().subscribe();
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
