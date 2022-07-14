
//BÀI 3 l TÍNH THUẾ THU NHẬP CÁ NHÂN
function ex3(){
    //tính thuế thu nhập cá nhân
    var fullname = "Đình Nguyễn"
    var totalSalary = 500;
    var people = 6;
    var thue;
    var totalCanhan = totalSalary - 4 - people*1.6;
    if (totalCanhan <= 60){thue = 0.05 * totalCanhan;
    }else if (totalCanhan<=120){thue = 0.05*60 + (totalCanhan - 60)*0.1}
    else if (totalCanhan<= 210){thue = 0.05*60 + 60*0.1 + (totalCanhan-120)*0.15}
    else if (totalCanhan<=384){thue = 0.05*60 + 60*0.1 + 60*0.15 + (totalCanhan-180)*0.2}
    else if (totalCanhan<=624){thue = 0.05*60 + 60*0.1 + 60*0.15 + 174*0.2 + (totalCanhan - 354)*0.25}
    else if (totalCanhan<=960){thue = 0.05*60 + 60*0.1 + 60*0.15 + 174*0.2 + 240*0.25 + (totalCanhan - 594)*0.3}
    else {thue = 0.05*60 + 60*0.1 + 60*0.15 + 174*0.2 + 240*0.25 + 336*0.3 + (totalCanhan-930)*0.35}
    console.log(thue);
}
ex3();


    //Bài 4 :Tính tiền cáp
    // Mức tính nhà dân
    function ex(){
        var loaiKH = "Doanh Nghiệp";
        var maKH = "Nguyễn";
        var soKenh = 9;
    
       sum=4.5 + 20.5 + 7.5*soKenh
       console.log("Mã khách hàng" ,maKH ,"Số tiền phải trả", sum);
  }
    ex();

    //Mức tính doanh nghiệp
    function ex4(){
        var loaiKH = "Doanh Nghiệp";
        var maKH = "Nguyễn";
        var soKenh = 9;
        var soKetNoi = 3;

        if (soKetNoi <= 10){
            sum = 15 + 75 + soKenh * 50 ;
        }else if (soKetNoi >10) {
            sum = 15 + 75 + soKenh * 50 + soKetNoi * 5;
        }
        console.log("Mã khách hàng" ,maKH ,"Số tiền phải trả", sum);
        }
    ex4();
   
