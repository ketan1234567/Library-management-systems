import { ActivatedRoute, Router } from '@angular/router';

import { map } from 'rxjs';

export class MyTimeDefinition {
  constructor(private route:Router){
      this.route.navigate(['/sign-in'])

  }
}

  
  
