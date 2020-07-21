
var i=0;
var users=[1000];
class User{
    constructor(name,age,email){
          this.name=name;
          this.age=age;
          this.email=email;
          this.coins=0;
          this.course=[];
          this.role='';
          users[i++]=this;
    }
    login(){
          console.log(`${this.name} has logged in`);
          return this;
    }
    logout(){
          console.log(`${this.name} has logged out`);
          return this;
    }
    static display(k){
          console.log(users[k]);
    }
}
class Moderator extends User{
    constructor(name,age,email,role){
          super(name,age,email);
          this.role='Moderator';
    }
    addCoins(user){
          user.coins++;
          console.log(`Moderator ${this.name} added coin to ${user.name} .The user now has ${user.coins} coins(s) in account`);
    }
    deleteCoins(user){
          user.coins--;
          console.log(`Moderator ${this.name} deleted coin from ${user.name} .The user now has ${user.coins} coin(s) in account`);
    }
    deleteUser(user){
          users=users.filter(u=>{return u.email!=user.email;});
    }
}
class Admin extends Moderator{
    constructor(name,age,email,role){
          super(name,age,email);
          this.role='Admin';
    }
    addCourse(user,Course){
          user.course.push(Course);
          console.log(` Admin ${this.name} added ${Course} to ${user.name}`);
    }
    deleteCourse(user){
          var del=user.course.shift();
          console.log(` Admin ${this.name} deleted ${del} to ${user.name}`);
    }
}
var user1=new User('Shubham',27,'shubham@gmail.com');
var user2=new User('Jasveer Singh',22,'jasveer@gmail.com');
var user3=new User('Raaj',24,'raaj@gmail.com');
var mod1=new Moderator('Riya',26,'riya@gmail.com');
var mod2=new Moderator('Priyanka',25,'priyanka@gmail.com');
var admin1=new Admin('Shipra',26,'Shipra@gmail.com');
var admin2=new Admin('Ajay',25,'ajay@gmail.com');
console.log(users);
user1.login().logout();
user2.login().logout();
user3.login().logout();
console.log("users:");
for(var j=0;j<users.length;j++){
console.log(User.display(j));
}
mod1.addCoins(user1);
mod1.addCoins(user2);
mod1.addCoins(user3);
mod2.deleteCoins(user3);
mod2.deleteUser(user2);
admin1.addCourse(user1,'JavaScript');
admin2.addCourse(user1,'Python');
admin2.addCourse(user1,'AI');
admin1.deleteCourse(user1);
console.log("After all actions<br>:");
console.log("users:");
for(var j=0;j<users.length;j++){
console.log(User.display(j));
}
