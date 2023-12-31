var nut=0
var hide= function hide1(){
   
   if(nut==0) {document.getElementById("translate").style.display="block" ;nut=1;return}
   if(nut==1) {document.getElementById("translate").style.display="none" ;nut=0;return}
}
var VNicon=document.getElementById("VNicon")
var ENicon = document.getElementById("ENicon")
var VN = document.getElementsByClassName("VN")
var EN = document.getElementsByClassName("EN")
VNicon.addEventListener('click',function(){
    for(var i=0;i<EN.length;i++)
    {
        EN[i].style.display="none"
    }
    for(var i=0;i<VN.length;i++)
    {
        VN[i].style.display="block"
    }
    document.getElementById('iconEVN').src="/image/iconVN.png"
})
ENicon.addEventListener('click',function(){
    for(var i=0;i<EN.length;i++)
    {
        VN[i].style.display="none"
    }
    for(var i=0;i<VN.length;i++)
    {
        EN[i].style.display="block"
    }
    document.getElementById('iconEVN').src="/image/iconE.png"
})
var swap_img = document.querySelectorAll(".img_product img")
    for(var i=0;i<swap_img.length;i++)
    {
        swap_img[i].addEventListener('click',function(){
            var swap;
            swap=swap_img[0].src
            swap_img[0].src=this.src
            this.src=swap 
        })
    }
let info_product=[
    {
        id:1,
        "nameVN":"Cây Cam Ngọt Của Tôi",
        "nameEN":"My Sweet Orange Tree",
        "authorVN": "Tác Giả : Jose Mauro de Vasconcelos",
        "authorEN": "Author : Jose Mauro de Vasconcelos",
        "publisherVN" : "Nhà Cung Cấp : Nhà Xuất Bản Trẻ",
        "publisherEN" : "Publisher : Young Supplier",
        "layoutVN" : "Hình Thức Bìa : Bìa Mềm",
        "layoutEN" : "Layoutbook : Paperback",
        "SupplierVN" : "Nhà Cung Cấp : Nhà Xuất Bản Trẻ ",
        "SupplierEN" : " Supplier : Young Supplier",
        "price1" : "76.000 đ",
        "price2" : "92.000 đ" , 
        "sale" : "-17%",
        "loreVN": " Hãy làm quen với Zezé, cậu bé tinh nghịch siêu hạng đồng thời cũng đáng yêu bậc nhất, với ước mơ lớn lên trở thành nhà thơ cổ thắt nơ bướm. Chẳng phải ai cũng công nhận khoản “đáng yêu” kia đâu nhé. Bởi vì, ở cái xóm ngoại ô nghèo ấy, nỗi khắc khổ bủa vây đã che mờ trái tim thiện lương cùng trí tưởng tượng tuyệt vời của cậu bé con năm tuổi.",
        "loreEN" : "Let's meet Zezé, a super mischievous boy who is also the most adorable, with the dream of growing up to become a poet with a bow tie. Not everyone recognizes that 'cuteness'. Because, in that poor suburban neighborhood, the surrounding austerity obscured the kind heart and wonderful imagination of a five-year-old boy.",
        "img1" : "/image/productNovel1.jpg",
        "img2" : "/image/caycamngot2.png",
        "img3" : "/image/caycamngot3.png",
        "img4" : "/image/caycamngot4.png"
    },
    {
        id:2,
        "nameVN":"Harry Potter Và Hoàng Tử Lai",
        "nameEN":"Harry Potter and the Half-Blood Prince",
        "authorVN": "Tác Giả : J.K.Rowling",
        "authorEN": "Author : J.K.Rowling",
        "publisherVN" : "Nhà Cung Cấp : Nhà Xuất Bản Trẻ",
        "publisherEN" : "Publisher : Young Supplier",
        "layoutVN" : "Hình Thức Bìa : Bìa Cứng",
        "layoutEN" : "Layoutbook : Hardback",
        "SupplierVN" : "Nhà Cung Cấp : Nhà Xuất Bản Trẻ ",
        "SupplierEN" : " Supplier : Young Supplier",
        "price1" : "98.000 đ",
        "price2" : "112.650 đ" , 
        "sale" : "-13%",
        "loreVN": " Cuộc phiêu lưu mới này gồm một loạt các khám phá về quá khứ của Chúa tể Voldemort, kèm theo những miêu tả sinh động về tuổi mới lớn với những xúc cảm ngây thơ, vui nhộn và nỗi căm hận đắng cay của Harry đối với 'Hoàng tử Lai'.",
        "loreEN" : "This new adventure is a series of discoveries about Lord Voldemort's past, accompanied by vivid depictions of adolescence filled with innocent, funny emotions and Harry's bitter hatred of 'The Dark Lord'- 'Prince Lai'",
        "img1":"/image/productNovel2.png",
        "img2" : "/image/harrypotter2.jpg",
        "img3" : "/image/harrypotter3.jpg",
        "img4" : "/image/harrypotter4.jpg"
    },
    {
        id:3,
        "nameVN":"Bí Kíp Luyện Rồng",
        "nameEN":"How To Train Your Dragon",
        "authorVN": "Tác Giả : Cressida Cowell",
        "authorEN": "Author : Cressida Cowell",
        "publisherVN" : "Nhà Cung Cấp : Nhà Xuất Bản Trẻ",
        "publisherEN" : "Publisher : Young Supplier",
        "layoutVN" : "Hình Thức Bìa : Bìa Cứng",
        "layoutEN" : "Layoutbook : Hardback",
        "SupplierVN" : "Nhà Cung Cấp : Nhà Xuất Bản Trẻ ",
        "SupplierEN" : " Supplier : Young Supplier",
        "price1" : "88.150 đ",
        "price2" : "102.650 đ" , 
        "sale" : "-14%",
        "loreVN": " Đây là cuốn hồi ký thứ 2 của Nấc Cụt sau quyển Bí Kíp Luyện Rồng. Lần này, cậu bé Nấc Cụt và cư dân Ngang Tàng Lông Lá sẽ có một chuyến phiêu lưu thú vị và hồi hộp đến đảo Đầu Lâu để tìm kiếm kho báu của cụ Râu Xồm Ghê Gớm. Trên hành trình, họ đã phải chiến đấu với những con quái vật khủng khiếp, và bọn Trục Xuất. Những tình tiết căng thẳng đến nghẹt thở và hài hước đan xen nhau làm cho câu chuyện càng thêm ly kỳ và hấp dẫn.",
        "loreEN" : "This is Hiccup's second memoir after How to Train Your Dragon. This time, the boy Hiccup and the resident Ngang Tang Hairy will have an exciting and thrilling adventure to Skull Island to search for the treasure of the Abominable Beard. On their journey, they had to fight terrible monsters, and the Banished. Breathtakingly tense and humorous details intertwine to make the story even more thrilling and attractive.",
        "img1":"/image/productNovel3.png",
        "img2" : "/image/traindragon2.jpg",
        "img3" : "/image/traindragon3.jpg",
        "img4" : "/image/traindragon4.jpg"
    },
    {
        id:4,
        "nameVN":"Moby Dick - Cá Voi Trắng",
        "nameEN":"Moby Dick or The Whale",
        "authorVN": "Tác Giả : Herman Melville",
        "authorEN": "Author : Herman Melville",
        "publisherVN" : "Nhà Cung Cấp : Nhà Xuất Bản Kim Đồng",
        "publisherEN" : "Publisher : Kim Dong Supplier",
        "layoutVN" : "Hình Thức Bìa : Bìa Cứng",
        "layoutEN" : "Layoutbook : Hardback",
        "SupplierVN" : "Nhà Cung Cấp : Nhà Xuất Bản Kim Đồng ",
        "SupplierEN" : " Supplier : Kim Dong Supplier",
        "price1" : "320.150 đ",
        "price2" : "372.650 đ" , 
        "sale" : "-14%",
        "loreVN": " Moby Dick - Cá voi trắng (nguyên tác: Moby-Dick; or, the Whale) là một tiểu thuyết phiêu lưu mạo hiểm của tác giả người Mỹ Herman Melville và được xuất bản lần đầu tiên vào năm 1851, được coi là một tiểu thuyết Mỹ vĩ đại và một kho tàng văn học thế giới. Câu chuyện kể về cuộc phiêu lưu của thủy thủ lang thang Ishmael, và chuyến đi của mình trên một con tàu săn cá voi được chỉ huy bởi thuyền trưởng tên Ahab. Ishmael sớm nhận rằng trong chuyến đi này, Ahab có một mục đích, để tìm ra một con cá voi trắng tên là Moby Dick, nó rất hung dữ và bí ẩn. Trong một cuộc gặp gỡ trước đó, con cá voi đã phá hủy thuyền Ahab và cắn cụt chân Ahab, bây giờ ông ta quyết tâm phải trả thù.",
        "loreEN" : "Moby Dick - The White Whale (originally: Moby-Dick; or, the Whale) is an adventure novel by American author Herman Melville and first published in 1851, considered a novel. Great American theory and a treasure of world literature. The story follows the adventures of the wandering sailor Ishmael, and his voyage on a whaling ship commanded by a captain named Ahab. Ishmael soon realized that on this trip, Ahab had a purpose, to find a white whale named Moby Dick, which was very ferocious and mysterious. In a previous encounter, the whale destroyed Ahab's boat and bit off Ahab's leg, now he is determined to get revenge.",
        "img1":"/image/productNovel4.png",
        "img2" : "/image/productNovel4.png",
        "img3" : "",
        "img4" : ""
    },
    {
        id:5,
        "nameVN":"Suối Nguồn",
        "nameEN":"The Fountainhead",
        "authorVN": "Tác Giả : Ayn Rand",
        "authorEN": "Author : Ayn Rand",
        "publisherVN" : "Nhà Cung Cấp : Nhà Xuất Bản Trẻ",
        "publisherEN" : "Publisher : Young Supplier",
        "layoutVN" : "Hình Thức Bìa : Bìa Mềm",
        "layoutEN" : "Layoutbook : Paperback",
        "SupplierVN" : "Nhà Cung Cấp : Nhà Xuất Bản Trẻ ",
        "SupplierEN" : " Supplier : Young Supplier",
        "price1" : "359.000 đ",
        "price2" : "389.250 đ" , 
        "sale" : "-7%",
        "loreVN": " Nhân vật chính của tác phẩm, Howard Roark, là một kiến trúc sư trẻ theo chủ nghĩa cá nhân, quyết chọn cho mình con đường tranh đấu dù đầy chông gai hơn là phải đem đam mê và quan điểm của mình ra để thỏa hiệp. Tác phẩm theo dấu hành trình của anh trên con đường hoạt động kiến trúc theo trường phái hiện đại, trường phái mà anh cho là ưu việt hơn so với lối kiến trúc truyền thống mà hầu hết tất cả mọi người tôn thờ.Những mối quan hệ phức tạp giữa Howard Roark và những nhân vật khác, có người giúp, có người cản trở, thậm chí cả hai, làm cho tác phẩm rất giàu kịch tính và đậm tính triết lý.",
        "loreEN" : "The main character of the work, Howard Roark, is a young individualist architect who decided to choose for himself a path of struggle, even though it is full of thorns, rather than having to compromise his passion and views. The work traces his journey on the path of modernist architecture, which he believes is superior to the traditional architecture that most people worship. Relationships The complex relationship between Howard Roark and other characters, some helping, some hindering, even both, makes the work very dramatic and philosophical.",
        "img1":"/image/productNovel5.png",
        "img2" : "/image/suoinguon2.jpg",
        "img3" : "/image/suoinguon3.jpg",
        "img4" : "/image/suoinguon4.jpg"
    },
    {
        id:6,
        "nameVN":"Phía Nam Biên Giới , Phía Tây Mặt Trời",
        "nameEN":"South of the Border , West of the Sun",
        "authorVN": "Tác Giả : Haruki Murakami",
        "authorEN": "Author : Haruki Murakami",
        "publisherVN" : "Nhà Cung Cấp : Nhà Xuất Bản Hội Nhà Văn",
        "publisherEN" : "Publisher : Writers Association Supplier",
        "layoutVN" : "Hình Thức Bìa : Bìa Mềm",
        "layoutEN" : "Layoutbook : Paperback",
        "SupplierVN" : "Nhà Cung Cấp : Nhà Xuất Bản Hội Nhà Văn ",
        "SupplierEN" : " Supplier : Writers Association Supplier",
        "price1" : "112.000 đ",
        "price2" : "158.250 đ" , 
        "sale" : "-29%",
        "loreVN": " Đó là câu chuyện đau đớn, khuấy động một cách ám ảnh. Một cuốn sách đẹp, gần như là mịn màng về những tầng sâu không thể dò đến của chúng ta.Ngay từ nhỏ, cậu bé Hajime đã nhận thức sự bối rối và mặc cảm thân phận ‘con một’, chẳng giống những đứa bạn cùng trang lứa. Và sau này, người bạn gái thân nhất của Hajime, Shimamoto-san cũng thuộc diện ‘con một’ hiếm hoi. Đến người con gái mà Hajime lao vào với niềm đam mê khoái lạc không thể kiểm soát được, cũng là ‘con một’... Khuấy động ngay từ đầu câu chuyện là một chàng trai quá nhạy cảm với xung quanh như thế",
        "loreEN" : "It is a painful, hauntingly stirring story. A beautiful, almost smooth book about our unfathomable depths. From a young age, young Hajime was aware of the confusion and guilt of being an 'only child', unlike his friends. same age. And later, Hajime's best girlfriend, Shimamoto-san, is also a rare 'only child'. Even the girl that Hajime rushed towards with an uncontrollable passion for pleasure was also an 'only child'... Stirring from the beginning of the story was a guy who was so sensitive to his surroundings.",
        "img1":"/image/productNovel6.png",
        "img2" : "/image/phianam2.jpg",
        "img3" : "/image/phianam3.jpg",
        "img4" : "/image/phianam4.jpg"
    },
    {
        id:7,
        "nameVN":"Nhà Giả Kim ",
        "nameEN":"The Alchemist",
        "authorVN": "Tác Giả : Paulo Coelho",
        "authorEN": "Author : Paulo Coelho",
        "publisherVN" : "Nhà Cung Cấp : Nhà Xuất Bản Hội Nhà Văn",
        "publisherEN" : "Publisher : Writers Association Supplier",
        "layoutVN" : "Hình Thức Bìa : Bìa Mềm",
        "layoutEN" : "Layoutbook : Paperback",
        "SupplierVN" : "Nhà Cung Cấp : Nhà Xuất Bản Hội Nhà Văn ",
        "SupplierEN" : " Supplier : Writers Association Supplier",
        "price1" : "69.999 đ",
        "price2" : "101.000 đ" , 
        "sale" : "-30%",
        "loreVN": " Tất cả những trải nghiệm trong chuyến phiêu du theo đuổi vận mệnh của mình đã giúp Santiago thấu hiểu được ý nghĩa sâu xa nhất của hạnh phúc, hòa hợp với vũ trụ và con người. Tiểu thuyết Nhà giả kim của Paulo Coelho như một câu chuyện cổ tích giản dị, nhân ái, giàu chất thơ, thấm đẫm những minh triết huyền bí của phương Đông. Trong lần xuất bản đầu tiên tại Brazil vào năm 1988, sách chỉ bán được 900 bản. Nhưng, với số phận đặc biệt của cuốn sách dành cho toàn nhân loại, vượt ra ngoài biên giới quốc gia, Nhà giả kim đã làm rung động hàng triệu tâm hồn, trở thành một trong những cuốn sách bán chạy nhất mọi thời đại, và có thể làm thay đổi cuộc đời người đọc.",
        "loreEN" : "All the experiences during his adventure in pursuit of his destiny have helped Santiago understand the deepest meaning of happiness, harmony with the universe and people. Paulo Coelho's novel The Alchemist is like a simple, compassionate, poetic fairy tale, imbued with the mystical wisdom of the East. When first published in Brazil in 1988, the book sold only 900 copies. But, with the book's special fate for all humanity, beyond national borders, The Alchemist has touched millions of souls, becoming one of the best-selling books of all time, and can change the reader's life.",
        "img1":"/image/productNovel7.png",
        "img2" : "/image/nhagiakim2.jpg",
        "img3" : "/image/nhagiakim3.jpg",
        "img4" : "/image/nhagiakim4.jpg"
    },
    {
        id:8,
        "nameVN":"Bố Già - The GodFather",
        "nameEN":"The Godfather",
        "authorVN": "Tác Giả : Mario Puzo",
        "authorEN": "Author : Mario Puzo",
        "publisherVN" : "Nhà Cung Cấp : Nhà Xuất Bản Đông Á",
        "publisherEN" : "Publisher : Dong A Supplier",
        "layoutVN" : "Hình Thức Bìa : Bìa Mềm",
        "layoutEN" : "Layoutbook : Paperback",
        "SupplierVN" : "Nhà Cung Cấp : Nhà Xuất Bản Đông Á ",
        "SupplierEN" : " Supplier : Dong A Supplier",
        "price1" : "110.000 đ",
        "price2" : "138.250 đ" , 
        "sale" : "-20%",
        "loreVN": " Thế giới ngầm được phản ánh trong tiểu thuyết Bố già là sự gặp gỡ giữa một bên là ý chí cương cường và nền tảng gia tộc chặt chẽ theo truyền thống mafia xứ Sicily với một bên là xã hội Mỹ nhập nhằng đen trắng, mảnh đất màu mỡ cho những cơ hội làm ăn bất chính hứa hẹn những món lợi kếch xù. Trong thế giới ấy, hình tượng Bố già được tác giả dày công khắc họa đã trở thành bức chân dung bất hủ trong lòng người đọc.",
        "loreEN" : "The underworld reflected in the novel The Godfather is the meeting between the strong will and strict family foundation of the Sicilian mafia tradition on the one hand and the ambiguous black and white American society, the land of fertile for illicit business opportunities that promise huge profits. In that world, the image of the Godfather painstakingly portrayed by the author has become an immortal portrait in the hearts of readers.",
        "img1":"/image/productNovel8.png",
        "img2" : "/image/bogia2.jpg",
        "img3" : "/image/bogia3.jpg",
        "img4" : "/image/bogia4.jpg"
    },
    {
        id:9,
        "nameVN":"Bắt Trẻ Đồng Xanh",
        "nameEN":"The Catcher in the Rye",
        "authorVN": "Tác Giả : J. D. Salinger",
        "authorEN": "Author : J. D. Salinger",
        "publisherVN" : "Nhà Cung Cấp : Nhà Xuất Trẻ",
        "publisherEN" : "Publisher : Young Supplier",
        "layoutVN" : "Hình Thức Bìa : Bìa Mềm",
        "layoutEN" : "Layoutbook : Paperback",
        "SupplierVN" : "Nhà Cung Cấp : Nhà Xuất Bản Trẻ ",
        "SupplierEN" : " Supplier : Young Supplier",
        "price1" : "76.000 đ",
        "price2" : "98.250 đ" , 
        "sale" : "-22%",
        "loreVN": "Holden Caulfield, 17 tuổi, đã từng bị đuổi học khỏi ba trường, và trường dự bị đại học Pencey Prep là ngôi trường thứ tư. Và rôi cậu lại trượt 4 trên 5 môn học và nhận được thông báo đuổi học. Câu chuyện kể về chuỗi ngày tiếp theo sau đó của Holden, với ánh nhìn cay độc, giễu cợt vào một cuộc đời tẻ nhạt, xấu xa, trụy lạc và vô phương hướng của một thanh niên trẻ.Bắt trẻ đồng xanh đã từng trở thành chủ đề tranh luận hết sức sâu rộng tại Mỹ. Sau rất nhiều thị phi, tác phẩm đã được đưa vào giảng dạy tại chương trình trung học Mỹ. Và hơn thế, tạp chí Time đã xếp Bắt trẻ đồng xanh vào một trong 100 tác phẩm viết bằng tiếng Anh hay nhất từ năm 1923 đến nay.",
        "loreEN" : "Holden Caulfield, 17, has been expelled from three schools, and Pencey Prep is the fourth. And then he failed 4 out of 5 subjects and received an expulsion notice. The story tells about the following days of Holden, with a cynical, mocking look at the boring, evil, depraved and directionless life of a young man. The Catcher in the Rye has become became the subject of extensive debate in the United States. After much controversy, the work was taught in American high school programs. And more than that, Time magazine ranked The Catcher in the Rye as one of the 100 best works written in English from 1923 to the present.",
        "img1":"/image/productNovel9.png",
        "img2" : "/image/productNovel9.png",
        "img3" : "/image/battre2.jpg",
        "img4" : "/image/battre3.jpg"
    },
    {
        id:10,
        "nameVN":"Nanh Trắng",
        "nameEN":"White Fang",
        "authorVN": "Tác Giả : Jack London",
        "authorEN": "Author : Jack London",
        "publisherVN" : "Nhà Cung Cấp : Minh Long",
        "publisherEN" : "Publisher : Minh Long",
        "layoutVN" : "Hình Thức Bìa : Bìa Mềm",
        "layoutEN" : "Layoutbook : Paperback",
        "SupplierVN" : "Nhà Cung Cấp : Nhà Xuất Bản Văn Học ",
        "SupplierEN" : " Supplier : literary Supplier",
        "price1" : "46.500 đ",
        "price2" : "53.250 đ" , 
        "sale" : "-12%",
        "loreVN": "Tác phẩm này mang đặc thù phong cách văn xuôi chính xác của Jack London và cách sử dụng giọng văn và phối cảnh sáng tạo của ông. Phần lớn nội dung tiểu thuyết được viết từ lối nhìn của động vật, cho phép Jack London khảo sát cách mà loài vật nhìn nhận thế giới của chúng và cách mà chúng nhìn nhận loài người. Nanh Trắng khảo sát thế giới bạo lực của dã thú, và thế giới không kém phần bạo lực của nhân loại được xem là văn minh.",
        "loreEN" : "This work is characterized by Jack London's precise prose style and his creative use of voice and perspective. Much of the novel is written from the animal's perspective, allowing Jack London to examine how animals view their world and how they view humans. The White Fang examines the violent world of wild beasts, and the equally violent world of humanity considered civilized.",
        "img1":"/image/productNovel10.png",
        "img2" : "/image/productNovel10.png",
        "img3" : "/image/nanh2.jpg",
        "img4" : "/image/nanh3.jpg"
    },
    {
        id:11,
        "nameVN":"Mùa Hè Bất Tận",
        "nameEN":"Endless Summer",
        "authorVN": "Tác Giả : Lâm Hoàng Trúc",
        "authorEN": "Author : Lâm Hoàng Trúc",
        "publisherVN" : "Nhà Cung Cấp : Minh Long",
        "publisherEN" : "Publisher : Minh Long",
        "layoutVN" : "Hình Thức Bìa : Bìa Mềm",
        "layoutEN" : "Layoutbook : Paperback",
        "SupplierVN" : "Nhà Cung Cấp : Nhà Xuất Bản Thanh Niên ",
        "SupplierEN" : " Supplier : Youth Supplier",
        "price1" : "123.000 đ",
        "price2" : "138.250 đ" , 
        "sale" : "-11%",
        "loreVN": "Ba năm sau Đường Hoa (2018), tác giả Lâm Hoàng Trúc trở lại với tác phẩm mới đánh dấu bước trưởng thành vượt bậc trong cả nét vẽ lẫn nội dung thể hiện. Mùa Hè Bất Tận là câu chuyện của hai đứa trẻ cùng tên Phương đang bước vào năm học cuối cùng của cấp hai. Những tâm tư của chúng tưởng như đơn thuần, chỉ xoay quanh thế giới nhỏ bé của tuổi thiếu niên, như chuyện học hành thi cử, những kỳ vọng của mẹ cha, hay những rung động đầu đời. Nhưng kỳ thực, đó lại là một quá trình trút bỏ vỏ kén đầy đau đớn để cả hai tìm kiếm bản ngã của chính mình ở ngưỡng cửa trưởng thành.",
        "loreEN" : "Three years after Duong Hoa (2018), author Lam Hoang Truc returned with a new work that marked a remarkable maturity in both drawing and content. Endless Summer is the story of two children with the same name Phuong who are entering their final year of middle school. Their thoughts seem simple, only revolving around the small world of adolescence, such as studying for exams, the expectations of their parents, or the first thrills of life. But in reality, it is a painful process of shedding their cocoons for both of them to find their own egos at the threshold of adulthood.",
        "img1":"/image/productComics1.jpg",
        "img2" : "/image/muahe2.png",
        "img3" : "/image/muahe3.png",
        "img4" : "/image/muahe4.png"
    },
    {
        id:12,
        "nameVN":"Bất Tử Và Bất Hạnh",
        "nameEN":"Undead Unlucky",
        "authorVN": "Tác Giả : Totsuka Yoshifumi",
        "authorEN": "Author : Totsuka Yoshifumi",
        "publisherVN" : "Nhà Cung Cấp : Nhà Xuất Bản Kim Đồng",
        "publisherEN" : "Publisher : Kim Đồng Supplier",
        "layoutVN" : "Hình Thức Bìa : Bìa Mềm",
        "layoutEN" : "Layoutbook : Paperback",
        "SupplierVN" : "Nhà Cung Cấp : Nhà Xuất Bản Kim Đồng ",
        "SupplierEN" : " Supplier : Kim Dong Supplier",
        "price1" : "45.999 đ",
        "price2" : "50.250 đ" , 
        "sale" : "-8%",
        "loreVN": " Undead Unluck, một bộ manga được sáng tác bởi Yoshifumi Tozuka và đã cho ra mắt vào ngày 20 tháng 1 năm 2020. Như tiêu đề của truyện, manga đưa người đọc đến một thế giới kỳ ảo cùng với anh chàng nhân vật chính tên Andy, người luôn tìm kiếm cái chết và đang dần mất niềm tin vào cuộc sống. Cho đến một ngày nọ, anh gặp được Fuuko, một cô gái xui xẻo, cô có thể truyền vận xui của mình cho bất kỳ ai chạm vào cơ thể. Andy phát hiện ra cô nàng sẽ giúp mình có được cái chết vậy nên anh đã lập nên một tổ đặc biệt chỉ có hai thành viên. Kể từ đây một câu chuyện ảo diệu bắt đầu được diễn ra.",
        "loreEN" : "Undead Unluck, a manga series created by Yoshifumi Tozuka and released on January 20, 2020. As the title of the story suggests, the manga takes readers to a fantasy world with the main character named Andy , who is always looking for death and is gradually losing faith in life. Until one day, he meets Fuuko, an unlucky girl who can transmit her bad luck to anyone who touches her body. Andy discovered that she would help him achieve death, so he formed a special team with only two members. From here a magical story begins to take place.",
        "img1":"/image/productComics2.jpg",
        "img2" : "/image/undead2.jpg",
        "img3" : "",
        "img4" : ""
    },
    {
        id:13,
        "nameVN":"Naruto Truyền Kỳ",
        "nameEN":"Naruto Shippuden",
        "authorVN": "Tác Giả : Masashi Kishimoto",
        "authorEN": "Author : Masashi Kishimoto",
        "publisherVN" : "Nhà Cung Cấp : Nhà Xuất Bản Kim Đồng",
        "publisherEN" : "Publisher : Kim Dong Supplier",
        "layoutVN" : "Hình Thức Bìa : Bìa Mềm",
        "layoutEN" : "Layoutbook : Paperback",
        "SupplierVN" : "Nhà Cung Cấp : Nhà Xuất Bản Kim Đồng ",
        "SupplierEN" : " Supplier : Kim Dong Supplier",
        "price1" : "23.750 đ",
        "price2" : "30.000 đ" , 
        "sale" : "-21%",
        "loreVN": "Naruto Shippuden là câu chuyện về Naruto Uzumaki, ninja trẻ, và hành trình của anh để trở thành Hokage và bảo vệ làng khỏi các mối đe dọa, cùng với hành trình tìm kiếm người bạn Sasuke và đối đầu với tổ chức Akatsuki, đồng thời khám phá quá khứ và sức mạnh ẩn giấu.",
        "loreEN" : "Naruto Shippuden is the story of Naruto Uzumaki, a young ninja, and his journey to become Hokage, protecting the village from threats. Alongside his quest to find his friend Sasuke, he confronts the Akatsuki organization, explores his hidden past and powers.",
        "img1":"/image/productComics3.jpg",
        "img2":"/image/naruto2.jpg",
        "img3":"/image/naruto3.jpg",
        "img4":""
    },    
    {
        id:14,
        "nameVN":"Đảo Hải Tặc",
        "nameEN":"One piece",
        "authorVN": "Tác Giả :Eichiro Oda",
        "authorEN": "Author : Eichiro Oda",
        "publisherVN" : "Nhà Cung Cấp : Nhà Xuất Bản Kim Đồng",
        "publisherEN" : "Publisher : Kim Dong Supplier",
        "layoutVN" : "Hình Thức Bìa : Bìa Mềm",
        "layoutEN" : "Layoutbook : Paperback",
        "SupplierVN" : "Nhà Cung Cấp : Nhà Xuất Bản Kim Đồng ",
        "SupplierEN" : " Supplier : Kim Dong Supplier",
        "price1" : "23.750 đ",
        "price2" : "30.000 đ" , 
        "sale" : "-21%",
        "loreVN": " One Piece là câu chuyện về Monkey D. Luffy và cuộc thám hiểm vùng biển Grand Line, với mục tiêu trở thành Vua Hải Tặc. Anh gặp gỡ và dẫn đầu một đội thám hiểm qua những thách thức, tìm kiếm kho báu One Piece và một cuộc phiêu lưu không tận. ",
        "loreEN" : " One Piece is the story of Monkey D. Luffy and the exploration of the Grand Line, aiming to become the Pirate King. He encounters and leads a crew through challenges, seeking the One Piece treasure and an endless adventure.",
        "img1":"/image/productComics4.png",
        "img2":"/image/onepiece2.jpg",
        "img3":"/image/onepiece3.jpg",
        "img4":"/image/onepiece4.jpg"
    }
    ,
    {
        id:15,
        "nameVN":"Bleach-Huyết Chiến Ngàn Năm",
        "nameEN":"Bleach-One Thousand Year Blood War",
        "authorVN": "Tác Giả : Kubo Tite",
        "authorEN": "Author : Kubo Tite",
        "publisherVN" : "Nhà Cung Cấp : Nhà Xuất Bản Trẻ",
        "publisherEN" : "Publisher : Young Supplier",
        "layoutVN" : "Hình Thức Bìa : Bìa Mềm",
        "layoutEN" : "Layoutbook : Paperback",
        "SupplierVN" : "Nhà Cung Cấp : Nhà Xuất Bản Trẻ ",
        "SupplierEN" : " Supplier : Young Supplier",
        "price1" : "28.350 đ" ,
        "price2" : "40.000 đ" , 
        "sale" : "-30%",
        "loreVN": "  Bleach kể về Ichigo Kurosaki, một Shinigami (Thần chết) đấu tranh với linh hồn và bảo vệ thế giới. Anh phải đối đầu với mối đe dọa siêu nhiên và khám phá sức mạnh của linh hồn.",
        "loreEN" : " Bleach is the story of Ichigo Kurosaki, a Shinigami (Soul Reaper) who battles spirits and protects the world. He faces supernatural threats and explores his own soul's powers.",
        "img1":"/image/productComics5.jpg",
        "img2":"/image/bleach2.jpg",
        "img3":"/image/bleach3.jpg",
        "img4":"/image/bleach4.jpg"
    }
    ,
    {
        id:16,
        "nameVN":"Bảy Viên Ngọc Rồng",
        "nameEN":"Dragon ball",
        "authorVN": "Tác Giả :Akira Toriyam",
        "authorEN": "Author : Akira Toriyam",
        "publisherVN" : "Nhà Cung Cấp : Nhà Xuất Bản Kim Đồng",
        "publisherEN" : "Publisher : Kim Dong Supplier",
        "layoutVN" : "Hình Thức Bìa : Bìa Mềm",
        "layoutEN" : "Layoutbook : Paperback",
        "SupplierVN" : "Nhà Cung Cấp : Nhà Xuất Bản Kim Đồng ",
        "SupplierEN" : " Supplier : kim Dong Supplier",
        "price1" : "25.999 đ",
        "price2" : "35.000 đ" , 
        "sale" : "-26%",
        "loreVN": " kể về Goku, một chiến binh Saiyan, và hành trình của anh để tìm Kiếm viên Ngọc Rồng, chiến đấu với nguy cơ toàn cầu và trở thành người mạnh nhất trong vũ trụ.",
        "loreEN" : " is the story of Goku, a Saiyan warrior, and his quest to find the Dragon Balls, battle global threats, and become the most powerful being in the universe.",
        "img1":"/image/productComics6.jpg",
        "img2":"/image/ngocrong2.jpg",
        "img3":"/image/ngocrong3.jpg",
        "img4":"/image/ngocrong4.jpg"
    }
    ,
    {
        id:17,
        "nameVN":"Doraemon - Chú Mèo Máy Đến Từ Tương Lai",
        "nameEN":"Doraemon - Gadget Cat from the Future",
        "authorVN": "Tác Giả : Fujiko Fujio",
        "authorEN": "Author : Fujiko Fujio",
        "publisherVN" : "Nhà Cung Cấp :Nhà Xuất Bản Kim Đồng",
        "publisherEN" : "Publisher :  Kim Đồng Supplier",
        "layoutVN" : "Hình Thức Bìa : Bìa Mềm",
        "layoutEN" : "Layoutbook : Paperback",
        "SupplierVN" : "Nhà Cung Cấp :Nhà Xuất Bản Kim Đồng ",
        "SupplierEN" : " Supplier : Kim Dong Supplier",
        "price1" : "18.500 đ",
        "price2" : "28.000 đ" , 
        "sale" : "-34%",
        "loreVN": " Doraemon là một bộ truyện tranh và anime nổi tiếng của Nhật Bản về một chú mèo máy tên là Doraemon và cậu bé Nobita. Doraemon đến từ tương lai để giúp Nobita vượt qua các khó khăn và thách thức trong cuộc sống hàng ngày.",
        "loreEN" : "Doraemon is a popular Japanese manga and anime series about a robotic cat named Doraemon and a boy named Nobita. Doraemon comes from the future to help Nobita overcome various challenges and difficulties in his daily life.",
        "img1":"/image/productComics7.jpg",
        "img2":"/image/doremon2.jpg",
        "img3":"/image/doremon3.jpg",
        "img4":"/image/doremon4.jpg"
    }
    ,
    {
        id:18,
        "nameVN":"Thám Tử Lừng Danh Conan",
        "nameEN":"Detective Conan",
        "authorVN": "Tác Giả :Gosho Aoyama",
        "authorEN": "Author : Gosho Aoyama",
        "publisherVN" : "Nhà Cung Cấp :Nhà Xuất Bản Kim Đồng",
        "publisherEN" : "Publisher :Kim Dong Supplier",
        "layoutVN" : "Hình Thức Bìa : Bìa Mềm",
        "layoutEN" : "Layoutbook : Paperback",
        "SupplierVN" : "Nhà Cung Cấp : Nhà Xuất Bản Kim Đồng ",
        "SupplierEN" : " Supplier : Kim Dong Supplier",
        "price1" : "24.500 đ",
        "price2" : "28.000 đ" , 
        "sale" : "-13%",
        "loreVN": " kể về Shinichi Kudo, một thám tử tài năng trẻ bị thu nhỏ thành một đứa trẻ sau khi bị một tổ chức tội phạm bí ẩn đầu độc. Dưới tên Conan Edogawa, anh tiếp tục giải quyết các vụ án và khám phá bí mật của tổ chức đó.",
        "loreEN" : "is about Shinichi Kudo, a young prodigy detective who is shrunk into a child after being poisoned by a mysterious criminal organization. Under the name Conan Edogawa, he continues to solve cases and uncover the secrets of the organization.",
        "img1":"/image/productComics8.jpg",
        "img2":"/image/conan2.jpg",
        "img3":"/image/conan3.jpg",
        "img4":"/image/conan4.jpg"
    }
    ,
    {
        id:20,
        "nameVN":"Gintama - Linh Hồn Bạc ",
        "nameEN":"Gintama - Silver Soul",
        "authorVN": "Tác Giả : Hideaki Sorachi",
        "authorEN": "Author : Hideaki Sorachi",
        "publisherVN" : "Nhà Cung Cấp : Nhà Xuất Bản Kim Đồng",
        "publisherEN" : "Publisher : Kim Dong Supplier",
        "layoutVN" : "Hình Thức Bìa : Bìa Mềm",
        "layoutEN" : "Layoutbook : Paperback",
        "SupplierVN" : "Nhà Cung Cấp : Nhà Xuất Bản Kim Đồng  ",
        "SupplierEN" : " Supplier : Kim Dong Supplier",
        "price1" : "24.000 đ",
        "price2" : "28.000 đ" , 
        "sale" : "-14%",
        "loreVN": " Bối cảnh của Gintama là phiên bản hư cấu của kinh thành Edo thế kỷ 19, khi Trái Đất bị các giống người ngoài hành tinh gọi chung là Amanto xâm lược. Câu chuyện xoay quanh cuộc sống thường ngày của samurai hành nghề tự do Sakata Gintoki cùng hai đàn em Shimura Shinpachi và Kagura.",
        "loreEN" : "Gintama's setting is a fictionalized version of the 19th century Edo capital, when Earth was invaded by aliens collectively known as Amanto. The story revolves around the daily life of freelance samurai Sakata Gintoki and his two juniors Shimura Shinpachi and Kagura.",
        "img1":"/image/productComics10.jpg",
        "img2":"/image/gintama2.jpg",
        "img3":"/image/gintama3.jpg",
        "img4":"/image/gintama4.png"
    }
    ,
    {
        id:19,
        "nameVN":"Anh Hùng OnePunch",
        "nameEN":"One Punch Man ",
        "authorVN": "Tác Giả : One & Yusuke Murata",
        "authorEN": "Author :  One & Yusuke Murata",
        "publisherVN" : "Nhà Cung Cấp : Nhà Xuất Bản Kim Đồng ",
        "publisherEN" : "Publisher : Kim Dong Supplier",
        "layoutVN" : "Hình Thức Bìa : Bìa Mềm",
        "layoutEN" : "Layoutbook : Paperback",
        "SupplierVN" : "Nhà Cung Cấp : Nhà Xuất Bản Kim Đòng ",
        "SupplierEN" : " Supplier : Kim Dong Supplier",
        "price1" : "24.500 đ",
        "price2" : "27.000 đ" , 
        "sale" : "-9%",
        "loreVN": " One Punch Man là một bộ truyện tranh và anime nổi tiếng của Nhật Bản. Nó theo chân Saitama, một anh hùng mạnh mẽ nhưng cảm thấy nhàm chán vì anh có thể đánh bại bất kỳ đối thủ nào bằng một cú đấm duy nhất. Anh tham gia Liên đoàn Anh hùng, tìm kiếm thách thức mới trong cuộc sống, giao tiếp với các anh hùng khác và đối mặt với các mối đe dọa siêu nhiên.",
        "loreEN" : "One Punch Man is a popular Japanese manga and anime series. It follows Saitama, a powerful hero who becomes bored because he can defeat any opponent with a single punch. He joins the Hero Association, seeking new challenges in his life, while interacting with other heroes and facing supernatural threats.",
        "img1":"/image/productComics9.jpg",
        "img2":"/image/onepunch2.jpg",
        "img3":"/image/onepunch3.jpg",
        "img4":"/image/onepunch4.jpg"
    }
    ,
    {
        id:21,
        "nameVN":"Thế Giới Phẳng",
        "nameEN":"The World is Flat ",
        "authorVN": "Tác Giả : Thomas L. Friedman",
        "authorEN": "Author :  Thomas L. Friedman",
        "publisherVN" : "Nhà Cung Cấp : Nhà Xuất Bản Trẻ ",
        "publisherEN" : "Publisher : Young's Supplier",
        "layoutVN" : "Hình Thức Bìa : Bìa Mềm",
        "layoutEN" : "Layoutbook : Paperback",
        "SupplierVN" : "Nhà Cung Cấp : Nhà Xuất Bản Trẻ ",
        "SupplierEN" : " Supplier : Young's Supplier",
        "price1" : "350.500 đ",
        "price2" : "378.000 đ" , 
        "sale" : "-7%",
        "loreVN": " Trong xu thế toàn cầu hóa, việc tiếp cận và tham khảo những tri thức đương đại từ những nước đã phát triển về sự chuyển động của thế giới (đang ở bước ngoặt từ “tròn” sang “phẳng”, như cách nói của tác giả) có lẽ sẽ giúp chúng ta có thêm những thông tin bổ ích để có sự chủ động trong quá trình hội nhập. Với mục đích cung cấp và cập nhật những thông tin đang là sự kiện dẫn đầu có giá trị tham khảo, Nhà xuất bản Trẻ đã mua bản quyền và nay xin giới thiệu tới bạn đọc bản dịch Việt ngữ của THE WORLD IS FLAT - tác phẩm được xếp vào danh mục sách bán chạy nhất ở Mỹ (kể từ lần xuất bản đầu tiên tháng 4/ 2005 cho đến nay). Đây là bản dịch từ bản sách gốc mới nhất được sửa chữa, cập nhật và bổ sung hai chương mới nhất bởi chính tác giả. Xin trân trọng giới thiệu cùng bạn đọc.",
        "loreEN" : "In the trend of globalization, accessing and consulting contemporary knowledge from developed countries about the movement of the world (which is at the turning point from 'round' to 'flat', as the author puts it) fake) will probably help us get more useful information to be proactive in the integration process. With the purpose of providing and updating information that is leading events with reference value, Tre Publishing House has purchased the copyright and now would like to introduce to readers the Vietnamese translation of THE WORLD IS FLAT - author The product is ranked on the list of best-selling books in the US (since its first publication in April 2005 until now). This is a translation from the latest original book, corrected, updated and supplemented with two newest chapters by the author himself. We would like to respectfully introduce it to our readers.",
        "img1":"/image/productAcademic1.png",
        "img2":"/image/theflat2.jpg",
        "img3":"/image/theflat3.jpg",
        "img4":"/image/theflat4.jpg"
    }
    ,
    {
        id:22,
        "nameVN":"Vũ Trụ Trong Vỏ Hạt Dẻ",
        "nameEN":"The Universe In A Nutshell ",
        "authorVN": "Tác Giả : Stephen Hawking",
        "authorEN": "Author :  Stephen Hawking",
        "publisherVN" : "Nhà Cung Cấp : Nhà Xuất Bản Trẻ ",
        "publisherEN" : "Publisher : Young's Supplier",
        "layoutVN" : "Hình Thức Bìa : Bìa Cứng",
        "layoutEN" : "Layoutbook : hardback",
        "SupplierVN" : "Nhà Cung Cấp : Nhà Xuất Bản Trẻ ",
        "SupplierEN" : " Supplier : Young's Supplier",
        "price1" : "250.500 đ",
        "price2" : "268.000 đ" , 
        "sale" : "-6%",
        "loreVN": " Giống như nhiều người trong cộng đồng vật lý lý thuyết, Giáo sư Hawking luôn tìm cách khám phá chén thánh của khoa học – Lý thuyết về mọi thứ. Với phong cách dễ tiếp cận và dí dỏm của mình, ông hướng dẫn chúng ta tiến từng bước một để khám phá bí mật của vũ trụ – từ siêu trọng lực đến siêu đối xứng, từ lý thuyết lượng tử đến lý thuyết M, từ phép toàn ảnh đến tính đối ngẫu. Và ông đưa chúng ta đến hậu trường của một trong những cuộc phiêu lưu trí tuệ thú vị nhất của ông khi tìm cách “kết hợp Lý thuyết tương đối tổng quát của Einstein và ý tưởng đa lịch sử của Richard Feynman thành một lý thuyết thống nhất hoàn chỉnh sẽ mô tả mọi thứ xảy ra trong vũ trụ.”",
        "loreEN" : "Like many in the theoretical physics community, Professor Hawking has always sought to discover the holy grail of science – the Theory of Everything. In his accessible and witty style, he guides us step by step to uncover the secrets of the universe – from supergravity to supersymmetry, from quantum theory to M-theory, from holography to duality. And he takes us behind the scenes of one of his most exciting intellectual adventures as he sought to “combine Einstein's General Theory of Relativity and Richard Feynman's multiple history ideas into a unified theory.” complete description of everything that happens in the universe.”",
        "img1":"/image/productAcademic2.png",
        "img2":"/image/vutru2.jpg",
        "img3":"/image/vutru3.jpg",
        "img4":"/image/vutru4.jpg"
    }
    ,
    {
        id:23,
        "nameVN":"Sapiens : Lược Sử Loài Người",
        "nameEN":"Sapiens : A Brief History of Humankind",
        "authorVN": "Tác Giả : Yuvel Noah Harari",
        "authorEN": "Author :  Yuvel Noah Harari",
        "publisherVN" : "Nhà Cung Cấp : Alpha Books ",
        "publisherEN" : "Publisher : Alpha Books",
        "layoutVN" : "Hình Thức Bìa : Bìa Cứng",
        "layoutEN" : "Layoutbook : hardback",
        "SupplierVN" : "Nhà Cung Cấp : Nhà Xuất Bản Tri Thức ",
        "SupplierEN" : " Supplier : intellectuality Supplier",
        "price1" : "210.500 đ",
        "price2" : "248.000 đ" , 
        "sale" : "-15%",
        "loreVN": " Điểm độc đáo ở Harari là ông tập trung vào sức mạnh của câu chuyện và huyền thoại để đưa mọi người lại gần nhau... Tôi muốn giới thiệu cuốn sách này cho bất cứ ai hứng thú quan tâm tới một cách nhìn đầy hấp dẫn và thú vị về lịch sử ban đầu của con người... Harari kể về lịch sử loài người theo một cách dễ tiếp cận khiến bạn thật khó có thể đặt nó xuống”. “Sapiens thuộc loại sách có thể giúp dọn sạch tâm trí bạn. Tác giả của nó, Yuval Noah Harari, là một học giả người Israel trẻ tuổi và là một người làm xiếc tri thức điêu luyện với những bước nhảy logic khiến bạn phải thót tim ngưỡng mộ... Ngòi bút của Harari tỏa ra sức mạnh và sự sáng rõ, làm cho thế giới trở nên kỳ lạ và mới mẻ”.",
        "loreEN" : "What's unique about Harari is his focus on the power of story and myth to bring people together... I would recommend this book to anyone interested in a fascinating perspective and interesting take on early human history... Harari tells human history in an accessible way that makes it hard to put it down.” “Sapiens belongs to the category of books that can help clear your mind. Its author, Yuval Noah Harari, is a young Israeli scholar and a skilled intellectual acrobat whose logical leaps make your heart ache in admiration... Harari's pen radiates power and clarity, making the world strange and new.”",
        "img1":"/image/productAcademic3.png",
        "img2":"/image/nguoi2.jpg",
        "img3":"/image/nguoi3.jpg",
        "img4":"/image/nguoi4.jpg"
    }
    ,
    {
        id:24,
        "nameVN":"Về Nguồn Gốc Các Loài",
        "nameEN":"On The Origin of Species",
        "authorVN": "Tác Giả : Charles Darwin",
        "authorEN": "Author :  Charles Darwin",
        "publisherVN" : "Nhà Cung Cấp : Linh Hoàng Bookstore ",
        "publisherEN" : "Publisher : Linh Hoang Bookstore",
        "layoutVN" : "Hình Thức Bìa : Bìa Mềm",
        "layoutEN" : "Layoutbook : paperback",
        "SupplierVN" : "Nhà Cung Cấp : Nhà Xuất Bản Tri Thức ",
        "SupplierEN" : " Supplier : intellectuality Supplier",
        "price1" : "120.500 đ",
        "price2" : "128.500 đ" , 
        "sale" : "-6%",
        "loreVN": " Năm 1859, khi Darwin xuất bản cuốn sách “Nguồn gốc muôn loài”, cuốn sách đã được bán hết sạch chỉ trong vòng vài ngày. Nó gây ra một cuộc tranh cãi kịch liệt cả trong và ngoài giới khoa học. Dần dần, cuốn sách đã thay đổi nhận thức của chúng ta về các sinh vật sống. Năm 2015, một hội đồng gồm các tác giả sách bán chạy nhất, các thủ thư, nhà xuất bản và học giả của Anh quốc đã liệt kê hai mươi cuốn sách học thuật quan trọng nhất từng được viết ra. Họ đề nghị công chúng chọn ra một cuốn có ảnh hưởng sâu rộng nhất thế giới. Và người ta đã chọn “Nguồn gốc muôn loài” của Darwin.",
        "loreEN" : "In 1859, when Darwin published his book 'The Origin of Species', the book was sold out within just a few days. It caused a fierce debate both inside and outside the scientific community. Gradually, the book changed our perception of living creatures. In 2015, a panel of British bestselling authors, librarians, publishers and academics listed the twenty most important academic books ever written. They asked the public to choose the book that has the most profound impact in the world. And people chose Darwin's 'Origin of Species'.",
        "img1":"/image/productAcademic4.png",
        "img2":"/image/nguongoc2.jpg",
        "img3":"/image/nguongoc3.jpg",
        "img4":"/image/nguongoc4.jpg"
    }
    ,
    {
        id:25,
        "nameVN":"Những Nhà Khám Phá",
        "nameEN":"The Discoverers : A history of Man’s search to know his world and himself",
        "authorVN": "Tác Giả : Daniel J. Boorstin",
        "authorEN": "Author :  Daniel J. Boorstin",
        "publisherVN" : "Nhà Cung Cấp : Nhà Xuất Bản Tri Thức ",
        "publisherEN" : "Publisher : intellectuality Supplier",
        "layoutVN" : "Hình Thức Bìa : Bìa Mềm",
        "layoutEN" : "Layoutbook : paperback",
        "SupplierVN" : "Nhà Cung Cấp : Nhà Xuất Bản Tri Thức ",
        "SupplierEN" : " Supplier : intellectuality Supplier",
        "price1" : "220.500 đ",
        "price2" : "229.500 đ" , 
        "sale" : "-4%",
        "loreVN": " Được coi như cuốn sách lớn nhất của một trong những sử gia lớn nhất thời hiện đại, Những nhà khám phá là một tập khảo luận đồ sộ và bao quát về cách thức nhân loại đã khám phá thế giới, dù còn dang dở (bởi như Einstein đã từng nói, “Cái bí ẩn vĩnh hằng của thế giới là tính khả tri”). Boorstin chứng tỏ mình là một nghệ sĩ bậc thầy khi kết hợp những mảnh tư liệu lớn trong kho tàng lịch sử tri thức thành những cấu trúc trật tự và lô gích, theo một mạch văn sống động, hé mở sự vận động tiệm tiến của tri thức qua truyện kể về những cá nhân kiệt xuất đã từng vạch lối mở đường, bằng niềm tin, sự cẩn trọng cùng ý chí và quyết tâm sắt đá, tiến tới khai phá “miền đất lạ”, làm nên hiểu biết của chúng ta về sự phát triển của vũ trụ trong gần hai thiên niên kỷ qua, truy nguyên từ Ptolemy qua Copernicus và Newton tới Einstein, giúp ta nhìn thấu thời đại Khám phá vĩ đại, Tự nhiên muôn màu và hơn thế nữa…",
        "loreEN" : "Considered the greatest book by one of the greatest historians of modern times, The Explorers is a massive and comprehensive treatise on how humanity has discovered the world, albeit unfinished (by as Einstein once said, “The eternal mystery of the world is intelligibility”). Boorstin proves himself to be a master artist when he combines large fragments of documents in the treasury of intellectual history into orderly and logical structures, in a lively vein, revealing the gradual movement of knowledge through stories about outstanding individuals who once paved the way, with faith, caution, and iron will and determination, to explore 'strange lands', creating our knowledge. We learn about the development of the universe over nearly two millennia, tracing from Ptolemy through Copernicus and Newton to Einstein, helping us see through the era of Great Discovery, Colorful Nature and more...",
        "img1":"/image/productAcademic5.png",
        "img2":"/image/khampha2.jpg",
        "img3":"/image/khampha3.webp",
        "img4":"/image/khampha4.jpg"
    }
    ,
    {
        id:26,
        "nameVN":"Đắc Nhân Tâm",
        "nameEN":"How to win friends and Influence People",
        "authorVN": "Tác Giả : Dale Carnegie",
        "authorEN": "Author :  Dale Carnegie",
        "publisherVN" : "Nhà Cung Cấp : AZ Việt Nam ",
        "publisherEN" : "Publisher : AZ VietNam",
        "layoutVN" : "Hình Thức Bìa : Bìa Mềm",
        "layoutEN" : "Layoutbook : paperback",
        "SupplierVN" : "Nhà Cung Cấp : Nhà Xuất Bản Thế Giới ",
        "SupplierEN" : " Supplier : World Supplier",
        "price1" : "56.900 đ",
        "price2" : "229.500 đ" , 
        "sale" : "-29%",
        "loreVN": " Dale Carnegie từng nói, việc kiếm được một triệu đô la vẫn dễ hơn thêm một cụm từ vào từ điển tiếng Anh. Vậy mà Đắc nhân tâm đã trở thành một cụm từ như thế: được trích dẫn, diễn giải, tái chế; được sử dụng trong vô số bối cảnh, từ phim hoạt hình, chính trị cho tới tiểu thuyết. Bản thân cuốn sách cũng được dịch sang hầu hết các ngôn ngữ được biết đến trên thế giới. Mỗi thế hệ lại khám phá tác phẩm theo một cách hoàn toàn mới và tìm ra những giá trị vẫn hữu dụng trong thời đại của họ.",
        "loreEN" : "Dale Carnegie once said, it is easier to make a million dollars than to add one phrase to the English dictionary. Yet How to Win Friends and Influence People has become such a phrase: quoted, paraphrased, recycled; used in countless contexts, from cartoons to politics to novels. The book itself has also been translated into almost every known language in the world. Each generation explores the work in a completely new way and finds values ​​that are still useful in their time.",
        "img1":"/image/productAcademic6.png",
        "img2":"/image/nhantam2.png",
        "img3":"/image/nhantam3.png",
        "img4":"/image/nhantam4.png"
    }
    ,
    {
        id:27,
        "nameVN":"Súng , Vi Trùng và Thép",
        "nameEN":"Guns , Germs and Steel",
        "authorVN": "Tác Giả : Jared Diamond",
        "authorEN": "Author :  Jared Diamond",
        "publisherVN" : "Nhà Cung Cấp : Alpha Books",
        "publisherEN" : "Publisher : Alpha Books",
        "layoutVN" : "Hình Thức Bìa : Bìa Mềm",
        "layoutEN" : "Layoutbook : paperback",
        "SupplierVN" : "Nhà Cung Cấp : Nhà Xuất Bản Thế Giới ",
        "SupplierEN" : " Supplier : World Supplier",
        "price1" : "68.500 đ",
        "price2" : "100.500 đ" , 
        "sale" : "-32%",
        "loreVN": " Nội dung cuốn sách giải thích vì sao các nền văn minh Á – Âu (bao gồm cả Bắc Phi) lại tồn tại được, cũng như đã chinh phục các nền văn minh khác, cùng lúc ông bác bỏ các lý thuyết về sự thống trị của các nền văn minh Á –Âu dựa trên trí tuệ, đạo đức hay ưu thế di truyền. Jared Diamond lập luận rằng, sự khác biệt về quyền lực và công nghệ giữa các xã hội loài người có nguồn gốc từ sự khác biệt về môi trường, trong đó sự khác biệt này được khuếch đại không ngừng. Qua đó, ông giải thích tại sao Tây Âu, chứ không phải các nền văn minh khác trong thế giới Á – Âu như Trung Quốc, lại trở thành các thế lực thống trị.",
        "loreEN" : "The book explains why Eurasian civilizations (including North Africa) survived and conquered other civilizations, while at the same time rejecting theories of domination. of Eurasian civilizations based on intelligence, morality or genetic superiority. Jared Diamond argues that differences in power and technology between human societies have their roots in environmental differences, which are constantly amplified. Thereby, he explains why Western Europe, and not other civilizations in the Eurasian world such as China, became the dominant powers.",
        "img1":"/image/productAcademic7.png",
        "img2":"/image/thep2.gif",
        "img3":"/image/thep3.gif",
        "img4":"/image/thep4.gif"
    }
    ,
    {
        id:28,
        "nameVN":"Lược Sử Thời Gian",
        "nameEN":"A Brief History of Time",
        "authorVN": "Tác Giả : Stephen Hawking",
        "authorEN": "Author :  Stephen Hawking",
        "publisherVN" : "Nhà Cung Cấp : Nhà Xuất Bản Trẻ",
        "publisherEN" : "Publisher : Young's Supplier",
        "layoutVN" : "Hình Thức Bìa : Bìa Mềm",
        "layoutEN" : "Layoutbook : paperback",
        "SupplierVN" : "Nhà Cung Cấp : Nhà Xuất Bản Trẻ ",
        "SupplierEN" : " Supplier : Young's Supplier",
        "price1" : "118.500 đ",
        "price2" : "132.500 đ" , 
        "sale" : "-10%",
        "loreVN": " Tò mò là một trong những phẩm chất bẩm sinh vô cùng quan trọng của chúng ta, và những vấn đề như Bản chất của vũ trụ là gì? Vũ trụ từ đâu ra? Chúng ta đến từ đâu và đóng vai trò gì trong vũ trụ? Có giới hạn cho sự nhận thức của con người không?... là những câu hỏi mà biết bao nhiêu thế hệ con người đã đặt ra dưới dạng này hoặc dạng khác từ khi bắt đầu biết nhận thức và suy ngẫm về thế giới này. Tất cả những vấn đề được nên ra trong tác phẩm Lược sử thời gian như Vũ trụ giãn nở, Lỗ đen, Nguồn gốc và số phận của vũ trụ, Mũi tên thời gian… đều là mong muốn của tác giả để phần nào trả lời được những câu hỏi đó, và hướng tới việc giải thích các giai đoạn lịch sử của toàn bộ vũ trụ.",
        "loreEN" : "Curiosity is one of our most important innate qualities, and questions such as What is the nature of the universe? Where did the universe come from? Where do we come from and what role do we play in the universe? Is there a limit to human perception?... are questions that countless generations of people have asked in one form or another since they began to perceive and reflect on this world. . All the issues raised in the work A Brief History of Time such as the expansion of the Universe, Black Holes, The Origin and Fate of the Universe, The Arrow of Time... are all the author's desire to partly answer. answer those questions, and aim to explain the historical periods of the entire universe.",
        "img1":"/image/productAcademic8.png",
        "img2":"/image/thoigian2.jpg",
        "img3":"/image/thoigian3.jpg",
        "img4":"/image/thoigian4.jpg"
    }
    ,
    {
        id:29,
        "nameVN":"Hành Trình Về Phương Đông",
        "nameEN":"Journey to the East",
        "authorVN": "Tác Giả : Baird T. Spalding",
        "authorEN": "Author :  Baird T. Spalding",
        "publisherVN" : "Nhà Cung Cấp : FIRST NEWS",
        "publisherEN" : "Publisher : FIRST NEWS",
        "layoutVN" : "Hình Thức Bìa : Bìa Mềm",
        "layoutEN" : "Layoutbook : paperback",
        "SupplierVN" : "Nhà Cung Cấp : Nhà Xuất Bản Thế Giới ",
        "SupplierEN" : " Supplier : World Supplier",
        "price1" : "48.650 đ",
        "price2" : "62.500 đ" , 
        "sale" : "-22%",
        "loreVN": " Hành Trình Về Phương Đông kể về những trải nghiệm của một đoàn khoa học gồm các chuyên gia hàng đầu của Hội Khoa Học Hoàng Gia Anh được cử sang Ấn Độ nghiên cứu về huyền học và những khả năng siêu nhiên của con người. Suốt hai năm trời rong ruổi khắp các đền chùa Ấn Độ, diện kiến nhiều pháp thuật, nhiều cảnh mê tín dị đoan, thậm chí lừa đào… của nhiều pháp sư, đạo sĩ… họ được tiếp xúc với những vị chân tu thông thái sống ẩn dật ở thị trấn hay trên rặng Tuyết Sơn. Nhờ thế, họ được chứng kiến, trải nghiệm, hiểu biết sâu sắc về các khoa học cổ xức và bí truyền của văn hóa Ấn Độ như yoga, thiền định, thuật chiêm tinh, các phép dưỡng sinh và chữa bệnh, những kiến thức về nhân duyên, nghiệp báo, luật nhân quả, cõi sống và cõi chết…",
        "loreEN" : "Journey to the East tells the story of the experiences of a scientific delegation consisting of leading experts from the British Royal Society of Sciences sent to India to research mysticism and supernatural abilities of humans. During two years of traveling around Indian temples, encountering many magic spells, superstitious scenes, even deception... of many magicians, Taoists... they came into contact with wise monks. live in seclusion in town or on the Tuyet Son range. Thanks to that, they can witness, experience, and deeply understand the ancient and esoteric sciences of Indian culture such as yoga, meditation, astrology, nutrition and healing, and the knowledge about fate, karma, the law of cause and effect, life and death...",
        "img1":"/image/productAcademic9.png",
        "img2":"/image/phuongdong2.jpg",
        "img3":"",
        "img4":""
    }
    ,
    {
        id:30,
        "nameVN":"Những Tù Nhân Địa Lý",
        "nameEN":"Prisoners of Geography",
        "authorVN": "Tác Giả : Tim Marshall",
        "authorEN": "Author :  Tim Marshall",
        "publisherVN" : "Nhà Cung Cấp : Nhã Nam",
        "publisherEN" : "Publisher : Nha Nam",
        "layoutVN" : "Hình Thức Bìa : Bìa Cứng",
        "layoutEN" : "Layoutbook : hardback",
        "SupplierVN" : "Nhà Cung Cấp : Nhà Xuất Bản Hội Nhà Văn ",
        "SupplierEN" : " Supplier : Writers Association Supplier",
        "price1" : "198.650 đ",
        "price2" : "207.900 đ" , 
        "sale" : "-4%",
        "loreVN": " “Nói nhanh cho vuông, đây là một trong những cuốn sách hay nhất về địa chính trị bạn có thể tưởng tượng: đọc nó cũng giống như một nguồn ánh sáng rọi vào tâm trí bạn… Marshall có cái đầu mạch lạc, sáng suốt và sở hữu một năng lực gần như thần bí là có thể làm cho bức tranh toàn cảnh trở nên dễ hiểu và mạch lạc… Cuốn sách này, bao quát một chủ đề phức tạp như vậy, thật kinh ngạc là tôi đã không thể buông cuốn sách cho tới khi đọc xong… Tôi không thể tìm ra một cuốn sách nào khác có thể giải thích tình hình thế giới hay hơn.” – Nicholas Lezard, Evening Standard",
        "loreEN" : "“To put it bluntly, this is one of the best books on geopolitics you can imagine: reading it is like a light shining into your mind… Marshall has a clear, lucid mind and possessing an almost mystical ability to make the whole picture understandable and coherent… This book, which covers such a complex subject, was so amazing that I couldn't put it down. book until I finished reading it... I couldn't find another book that could explain the world situation better.' – Nicholas Lezard, Evening Standard'",
        "img1":"/image/productAcademic10.png",
        "img2":"/image/dialy2.jpg",
        "img3":"/image/dialy3.jpg",
        "img4":"/image/dialy4.jpg"
    }
]
var price1=document.querySelector(".price1")
var price2=document.querySelector(".price2")
var sale=document.querySelector(".sale")
var change = function change1(a)
{
    for(var i=0;i<info_product.length;i++)
    {
        if(a==info_product[i].id)
        {
            document.querySelectorAll(".namePr")[0].innerHTML=info_product[i].nameVN
            document.querySelectorAll(".namePr")[1].innerHTML=info_product[i].nameEN
            document.querySelectorAll(".authorPr")[0].innerHTML=info_product[i].authorVN
            document.querySelectorAll(".authorPr")[1].innerHTML=info_product[i].authorEN
            document.querySelectorAll(".Publisher")[0].innerHTML=info_product[i].publisherVN
            document.querySelectorAll(".Publisher")[1].innerHTML=info_product[i].publisherEN
            document.querySelectorAll(".layout")[0].innerHTML=info_product[i].layoutVN
            document.querySelectorAll(".layout")[1].innerHTML=info_product[i].layoutEN
            document.querySelectorAll(".Supplier")[0].innerHTML=info_product[i].SupplierVN
            document.querySelectorAll(".Supplier")[1].innerHTML=info_product[i].SupplierEN
            price1.innerHTML=info_product[i].price1
            price2.innerHTML=info_product[i].price2
            sale.innerHTML=info_product[i].sale
            document.querySelectorAll(".lore")[0].innerHTML=info_product[i].loreVN
            document.querySelectorAll(".lore")[1].innerHTML=info_product[i].loreEN
            document.querySelector("#img1").src=info_product[i].img1
            document.querySelector("#img2").src=info_product[i].img2
            document.querySelector("#img3").src=info_product[i].img3
            document.querySelector("#img4").src=info_product[i].img4
            document.querySelector(".containerproduct").style.display="block"
            break
        }
    }
}
var id_product = localStorage.getItem('id')
change(id_product)
var product_search_list = document.querySelectorAll(".product_search")
var tb=document.querySelectorAll("#sl")
var search = function search1()
{
    document.querySelector(".tb").style.display="flex";
    var input_value = document.getElementById("searchbox").value;
    var input_value_legit = input_value.toLowerCase()
    if(input_value_legit.length==0) {
        for(var i=0;i<product_search_list.length;i++)
        {
            product_search_list[i].style.display="none"
        }
        tb[0].innerHTML='0'
        tb[1].innerHTML='0'
    }
    else
{
    let count2=0
    for(var i=0;i<product_search_list.length;i++)
    {
        var check=product_search_list[i].textContent.toLowerCase()
        if(check.indexOf(input_value_legit)>-1)
        {
            product_search_list[i].style.display="flex"
            count2+=1
        }
        if(check.indexOf(input_value_legit)<0){
            product_search_list[i].style.display="none"
        }
    }
    tb[0].innerHTML=count2
    tb[1].innerHTML=count2
}
}


