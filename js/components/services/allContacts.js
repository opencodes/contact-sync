!function(i){"use strict";i.module("MyContactsApp").factory("AllFriends",["Auth","fbutil","$firebaseArray",function(i,e,r){var d=i.$getAuth();return[r(e.ref("users",d.uid).child("friends").child("google")),r(e.ref("users",d.uid).child("friends").child("facebook")),r(e.ref("users",d.uid).child("friends").child("twitter")),r(e.ref("users",d.uid).child("friends").child("linkedin")),r(e.ref("users",d.uid).child("friends").child("others"))]}])}(angular);