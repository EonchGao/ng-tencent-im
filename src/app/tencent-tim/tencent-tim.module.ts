import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TencentTimComponent } from './tencent-tim/tencent-tim.component';
import { NzGridModule } from 'ng-zorro-antd';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ConversationListComponent } from './conversation/conversation-list/conversation-list.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { ConversationItemComponent } from './conversation/conversation-item/conversation-item.component';



@NgModule({
  declarations: [TencentTimComponent, SideBarComponent, ConversationListComponent, MyProfileComponent, ConversationItemComponent],
  imports: [
    CommonModule,
    NzGridModule,
    
  ],
  exports: [
    TencentTimComponent
  ]
})
export class TencentTimModule { }
