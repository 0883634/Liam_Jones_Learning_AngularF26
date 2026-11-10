import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GuardService } from '../services/guard';
import { LoadingService } from '../services/loading-service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  guardService = inject(GuardService);
  loadingService = inject(LoadingService);
}
