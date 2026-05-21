import { Login } from './pages/login/login';
import { Routes } from '@angular/router';
import { Signup } from './pages/signup/signup';
import { Live } from './pages/live/live';
import { Library } from './pages/library/library';
import { RecordingsComponent } from './pages/recordings/recordings';
import { Profile } from './pages/profile/profile';
import { RecordingDetails } from './pages/recording-details/recording-details';
import { LibraryDetails } from './pages/library-details/library-details';

export const routes: Routes = [

  {
  path:'library-details/:subject',
  component:LibraryDetails
},

{
  path:'recording-details/:subject',
  component:RecordingDetails
},


 {
  path: '',
  component: Login
},

{
  path:'login',
  component:Login
},

  {
    path: 'signup',
    component: Signup
  },

  {
    path: 'live',
    component: Live
  },

  {
    path: 'library',
    component: Library
  },

  {
    path: 'recordings',
    component: RecordingsComponent
  },

  {
    path: 'profile',
    component: Profile
  }

];