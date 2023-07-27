namespace loginuser.Data;

public static class Store
{
    public static List<User> Users = new List<User>{
        new User{Id=1,Username="user1",FirstName="Yasemin",LastName="Topsakal"},
        new User{Id=2,Username="user2",FirstName="Yasemin",LastName="Topsakal"},
        new User{Id=3,Username="user3",FirstName="Yasemin",LastName="Topsakal"},
        new User{Id=4,Username="user4",FirstName="Yasemin",LastName="Topsakal"},
        new User{Id=5,Username="user5",FirstName="Yasemin",LastName="Topsakal"},
        new User{Id=6,Username="user6",FirstName="Yasemin",LastName="Topsakal"},
        new User{Id=7,Username="user7",FirstName="Yasemin",LastName="Topsakal"},
        new User{Id=8,Username="user8",FirstName="Yasemin",LastName="Topsakal"},
    };
    public static List<Product> Products = new List<Product>{
        new Product{Id=1,Name="Home Delivery",Description="Transport your belongings safely",Remark=4200,Image="https://www.lojiport.com/d/news/34020.jpg",craftsmanName="Yasemin",score=4.6},
        new Product{Id=2,Name="Paint and White Wash",Description="Home, workplace paint and whitewash",Remark=5000,Image="https://images.squarespace-cdn.com/content/v1/58412fc9b3db2b11ba9398df/1485438903973-8S7BQVGHJDBQU8CF9XLN/shutterstock_228904558.jpg?format=1000w",craftsmanName="Ali",score=4.7},
        new Product{Id=3,Name="Plumbing Work",Description="Bathroom, sink, kitchen all plumbing works",Remark=2000,Image="https://izmirtadilatdekorasyon.com/files/uploads/images/hizmet/sihhi-tesisat-isleri.jpg",craftsmanName="Mehmet",score=4.3},
        new Product{Id=4,Name="	Modifications ",Description="Home and office remodeling and repair",Remark=3000,Image="https://mukyenhukuk.com/img/apartmanda-tadilat-yonetmeligi-nedir-mukyen-hukuk.webp",craftsmanName="Hasan",score=4.8},
        new Product{Id=5,Name="	House Cleaning",Description="Furnished house, general cleaning, detailed cleaning",Remark=1000,Image="https://www.temizlikonerilerim.com/wp-content/uploads/2021/09/genel-ev-temizligi-e1631196890752.jpg",craftsmanName="Ayşe",score=4.5},
        new Product{Id=6,Name="Empty House Cleaning",Description="Empty house cleaning, new movers, empty house cleaning after paint and whitewash", Remark=500,Image="https://cdn.armut.com/images/services/00669-bos-ev-temizligi.jpg",craftsmanName="Max",score=4.9},

    };
    public static List<Basket> Baskets = new List<Basket>{
        new Basket{Id=1,UserId=1,ProductId=1,Quantity=1},
        new Basket{Id=2,UserId=1,ProductId=2,Quantity=1},
        new Basket{Id=3,UserId=1,ProductId=3,Quantity=1}
    };

}