import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

title:String='Hilton Hotel';
numberOfRooms:number=10;

hideRooms=false;

rooms:Room={
  totalRooms:20,
  availableRooms:10,
  bookedRooms:5,
};

roomList:RoomList[]=[];



toggle()
{
  this.hideRooms=!this.hideRooms;
}

ngOnInit(): void {
  this.roomList=[{
    roomNumber:1,
    roomType:'Deluxe',
    ammenities:'AC, Geyser, Wi-Fi, TV, Kitchen',
    price:500,
    photos:'kfhkaf',
    checkinTime:new Date('11-Nov-2021'),
    checkoutTime:new Date('12-Nov-2022'),
    rating:4,
  },
  
  {
    roomNumber:2,
    roomType:'Super-Dexluxe',
  ammenities:'AC, Geyser, Wi-Fi, TV, Kitchen',
  price:1500,
  photos:'kfhkaf',
  checkinTime:new Date('12-Nov-2021'),
  checkoutTime:new Date('13-Nov-2022'),
  rating:4},
  
  { 
    roomNumber:3,
    roomType:'Deluxe',
  ammenities:'AC, Geyser, Wi-Fi, TV, Kitchen',
  price:500,
  photos:'kfhkaf',
  checkinTime:new Date('13-Nov-2021'),
  checkoutTime:new Date('14-Nov-2022'),
  rating:4,}];
 
}

}
