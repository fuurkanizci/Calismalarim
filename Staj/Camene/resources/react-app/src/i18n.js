import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    tr: {
        translation: {
            title_news: "Haberler",
            plans_title: "Planlar",
            title_doga: "Doğalarımızı Keşfedin",
            terra_text:
                "Camene Doğa hayallerini kurduğunuz doğa ile baş başa bir yaşam, 42 adet 6+1 ultra lüks villa seçenekleri tasarlanmış ve konforun ön planda olduğu bağımsız yaşam alanlarından oluşmaktadır. Camene Doğa, doğal yaşama olan özlemimizi; doğaya daha uyumlu bir yaşam merkezi haline dönüşmesi için tasarlandı.",
            title_plans: "Planlar",
            plans_alt: "Yenilikçi ve Estetik Mimari Planlar",
            text_villa_tipleri: "Villa Tipleri",
            tip: "TİP",
            tip1_text:
                "Camene Camene villaları 2 tip olarak üst kat planları aynı fakat alt kat planlarında açık mutfak ve kapalı mutfak olarak ayrılmaktadır. İpucu 1 açık mutfak planlıdır.",
            tip2_text:
                "Camene Camene villaları 2 tip olarak üst kat planları aynı fakat alt kat planlarında açık mutfak ve kapalı mutfak olarak ayrılmaktadır. İpucu 1 açık mutfak planlıdır.",
            intermediate_text:
                "İç mekanlarda tüm gereksinimleriniz göz önünde bulundurularak tasarlanmış bir çok konfor artırıcı özellik bulunmaktadır. Yaşamınıza huzur getirecek tüm ayrıntılar size ve ailenize yeni bir yaşamın en doğal halini sunmaktadır.",
            tarih_text: "Tarih Yanı Başınızda",
            last_article:
                "Camene Doğa villalarının çevresinde bir çok doğal ve tarihi güzellik bulunmaktadır. Güver uçurumu ve şelalesi, Düzler Çamı ve Termesos Milli Parkı gibi doğal alanları keşfetmek, en iyi aktiviteleriniz arasında yer alacak.",
            location: "Konum",
            text_location: "Konumunuzun keyfini zirvede yaşayın",
            our_location: "Konumumuz",
            our_location_text:
                "Camene, Kıbrıs'ın Lefkoşa bölgesinde, ormanın doğu kıyısında yer alan harika bir lokasyona sahiptir. Şehrin ana arterine bağlanan B20 oto yoluna yakın konumdadır. Yerleşim yerlerine çok yakın olması, genel olarak gereksinimleriniz için size yakın ve makul mesafeler sunmaktadır.",
            Airport: "Havaalanı",
            airport_time: "40 dk",
            konya_text: "Konyaaltı Beach Park",
            konya_time: "34 dk",
            hospital: "Hastane",
            hospital_time: "19dk",
            castle_interior: "Kaleiçi",
            castle_interior_time: "46 dk",
            Antalya_Science_Univ: "Antalya Bilim Üniv.  ",
            Antalya_Science_Univ_time: "23 dk",
            Özdilek_Shopping_Mall: "Özdilek AVM",
            Özdilek_Shopping_Mall_time: "26 dk",
            last_text:
                "Kıbrıs'ta birçok doğal ve tarihi güzellik bulunmaktadır. Girne Dağları ve St. Hilarion Kalesi gibi doğal alanları keşfetmek, en iyi aktiviteleriniz arasında yer alacak. Ayrıca Salamis Antik Kenti ve Bellapais Manastırı gibi tarihi kalıntılar da yine keşfedilmeyi bekleyen Kıbrıs'ın çevresindeki tarihi aktivite olanaklarındandır. Kıbrıs, zengin tarihi ve doğasıyla, ziyaretçilerine unutulmaz deneyimler sunar.",
            galeri_text: "Galeri",
            galeri_title: "Hayalinizdeki Yaşam Alanları",
            banner_contact: "İletişim",
            banner_text: "Doğanın manzarası bir telefon uzağınızda.",
            content_contact: "İletişim",
            content_contact_text:
                "Bize ulaşmaktan çekinmeyin! Bizi arayabilir, mesaj gönderebilir veya sosyal medyada bulabilirsiniz.",
            phone_text: "Telefon:",
            Address: "Adres:",
            proje_text: "Yeni bir projeye başlıyoruz.",
            intertitle:
                "Bizi daha yakından tanımak ve projelerimizi görmek için aşağıdaki bilgilerle bize ulaşabilirsiniz:",
            name_surname: "Ad Soyad",
            name_surname_placeholder: "Ad Soyad",
            phone: "Telefon",
            email: "E-posta",
            your_message: "Mesajınız",
            send_button: "Gönder",
            plan_menu: "Planlar",
            About_Us_menu: "Hakkımızda",
            Projects_menu: "Projeler",
            Features_menu: "Özellikler",
            location_menu: "Konum",
            gallery_menu: "Galeri",
            Contact_menu: "İletişim",

            footer_comment:
                "Camene ile özellikle mimari ve iç tasarım için yapılmış vitrin projeleri.",
            footer_newsletter: "Bültenimize katılın",
            camene_olarak: "Camene Olarak",
            home_description:
                "Camene Mimarlık, yaratıcı ve sürdürülebilir tasarımlar sunarak yaşam alanlarınıza değer katar. Estetik ve işlevselliği buluşturuyoruz.",
            mukkemmel_iklim: "Mükemmel İklim",
            mukemmel_iklim_1:
                "Kuzey Kıbrıs Türk Cumhuriyeti'nde (KKTC) konut satın alımını etkileyen en önemli nedenlerinden biri bölgenin ılıman iklimidir. Akdeniz'deki bu ada, her yıl 300'ün üzerinde güneşli gün ve Avrupa'nın en yüksek kış sıcaklıklarının yanı sıra tüm yıl boyunca iyi bir iklim yaşamaktadır.",
            mukemmel_iklim_2:
                "Serin Akdeniz rüzgarları, yazın güneşin kavurucu etkisini hafifletir. Yaz aylarında sıcaklık 35 derece civarında seyrederken, kış aylarında sıcaklık 5 derecenin altına düşmez.",
            mukemmel_iklim_3:
                "Tüm yıl boyunca yaşadığı ılıman iklimi sayesinde Kuzey Kıbrıs, önde gelen turistik bir yer ve yatırım merkezi haline gelmiştir.",
            guvenlik_dusuk: "Güvenlik ve Düşük Suç Oranı",
            guvenlik_dusuk_1: `Emlak satın alırken en önemli faktörün  "konum" olduğu söylenir.`,
            guvenlik_dusuk_2:
                "Ayrıcalıklı bir konumda gayrimenkul satın alırsanız, çeşitli olanakların yanı sıra bölgede gelecekte yapılacak gelişmeler sayesinde gayrimenkul değerindeki artıştan da yararlanırsınız.",
            kent_prj: "Kent Projesi",
            home_projects: "PROJELER",
            home_projects_aciklama:
                "Geleceği şekillendiren projelerimizle mimarlık sınırlarını zorluyor, işlevselliği ve estetiği birleştirerek sürdürülebilir ve yenilikçi yapılar tasarlıyoruz.",
            home_banner_2:
                "Camene ile doğanın güzelliklerini keşfetmek için bizimle iletişime geçin.",
            home_banner_2_btn: "İletişime Geç!",
            gallery: "Galeri",
            gallery_alt:
                "Galerimizi ziyaret edin ve projelerimizin detaylarına göz atın!",
            home_inside: "Ev İçerisi",
            danismanlik: "Danışmanlık",
            danismanlik_alt:
                "Danışmanlık hizmetlerimiz, projelerinizi en iyi şekilde yönetmek için uzman rehberliği ve stratejik çözümler sunar. Sektördeki deneyimimizle, her aşamada yanınızdayız.",
            insaat_prj: "İnşaat Projeleri",
            insaat_prj_alt:
                "İnşaat projelerimiz, estetik ve fonksiyonelliği bir araya getirerek kaliteli ve sürdürülebilir yapılar sunar. Her proje, özel ihtiyaçlara göre tasarlanır ve uygulanır.",
            mimarlik_buro: "Mimarlık Bürosu",
            mimarlik_buro_alt:
                "Mimarlık büromuz, yaratıcı ve yenilikçi tasarımlar sunarak projelerinizi hayata geçirir. Modern ve etkileyici yapılar yaratma konusunda uzmanız.",
            insaat_girisim: "İnşaat Girişimleri",
            insaat_girisim_alt:
                "İnşaat girişimlerimiz, sektördeki fırsatları değerlendirmek ve yenilikçi projeler geliştirmek üzerine odaklanır. Her girişim, başarıya ulaşmak için dikkatle planlanır.",
            proje_yonetimi: "Proje Yönetimi",
            proje_yonetimi_alt:
                "Mimarlık projelerinde proje yönetimi, tasarım aşamasından inşaatın tamamlanmasına kadar tüm süreci kapsar. Bu süreç, proje zaman çizelgesinin oluşturulması, bütçenin yönetilmesi ve kalite standartlarının sağlanmasını içerir. Etkili proje yönetimi, tasarım ve inşaat ekiplerinin koordinasyonunu, kaynakların verimli kullanımını ve potansiyel risklerin yönetilmesini sağlar.",
            insaat_isleri: "İnşaat İşleri",
            insaat_isleri_alt:
                "İnşaat işlerimiz, kaliteli malzemeler ve uzman işçilikle yüksek standartlarda inşaat hizmetleri sunar. Her proje, titizlikle yönetilir ve zamanında tamamlanır.",
            hakkimizda:
                "Mimarlık ve iç tasarım alanlarında çeşitli hizmetler sunuyoruz.",
            hakkimizda_2:
                "Yenilikçi ve estetik tasarımlar konusunda uzmanlaşmış bir ekibiz. Müşterilerimizin ihtiyaçlarını ve hayallerini anlayarak, fonksiyonel ve estetik çözümler sunuyoruz. Her projeyi, ayrıntılara verdiğimiz önem ve müşteri memnuniyetine olan bağlılığımızla yürütüyoruz. Misyonumuz, yaşam alanlarınızı sadece yaşamak için değil, aynı zamanda keyif almak için tasarlamak. Bizimle çalışarak, hayalinizdeki mekanları gerçeğe dönüştürün.",
            gercek_prjs: "Gerçekleştirilen projeler",
            gercek_prjs_side:
                "Gerçekleştirilen projelerimiz, mükemmeliyet ve yenilikçiliği temsil eder. Her projede yüksek kalite standartlarını yakalayıp, estetik ve işlevselliği bir araya getirerek sektördeki en iyi çözümleri sunuyoruz. Portföyümüzdeki projeler, müşterilerimize ilham vermek ve beklentilerini aşmak için tasarlandı.",
            hakkimizda_trnslt: "Hakkımızda",
            projects: "Projeler",
            projects_alt: "Yenilikçi Mimari Başarılarımız",
            projects_details_alt_main: "Modern ve Konforlu Yaşam Alanları",
            projects_li_1: "Hepsini Göster",
            projects_li_2: "Yapı",
            projects_li_3: "İç Mekan",
            projects_li_4: "Konut",
            projects_alt_title: "BİNA",
            projects_details_baslik:
                "Kıbrıs Kent Konut Projesi, modern yaşam alanları sunarak konfor ve estetiği bir araya getiriyor. Akıllı tasarımı ve kaliteli yapısı ile Kıbrıs'ta ideal bir yaşam sunuyor.",
            projects_details_title: "Kıbrıs Kent Konut Projesi",
            projects_details_alt:
                "Kıbrıs Kent Konut Projesi, çağdaş tasarımı ve fonksiyonelliği ile dikkat çekiyor. Proje, ferah yaşam alanları, modern mimari detaylar ve yüksek kaliteyi bir araya getirerek Kıbrıs'ta konforlu bir yaşam sunuyor. Şehir merkezine yakın konumu ve akıllı ev sistemleri ile yaşam kalitesini artıran bu proje, her yaş grubundan insan için ideal bir yaşam alanı oluşturuyor.",
            projects_details_alt_2:
                "Projede kullanılan yenilikçi malzemeler ve sürdürülebilir tasarım yaklaşımları, çevre dostu bir yaşam alanı sağlamayı hedefliyor. Kıbrıs Kent Konut Projesi, estetik açıdan modern bir görünüm sunarken, enerji verimliliği ve çevre duyarlılığı ile de ön plana çıkıyor. Bu sayede hem estetik hem de çevre dostu bir yaşam alanı arayanlar için mükemmel bir tercih oluyor.",
            year: "YIL:",
            client: "MÜŞTERİ:",
            client_alt: "Özel Konut",
            architects: "MİMARLAR:",
            architects_alt: "Camene",
            location_: "KONUM:",
            location_alt: "Kıbrıs",
            projects_details_li_1: "Ana Sayfa",
            projects_details_li_2: "Projeler",
            projects_details_li_3: "Kıbrıs Kent Konut Projesi",

            ozellikler: "Proje Özellikleri",
            ozellikler_alt: "Estetik ve Fonksiyonellik Bir Arada",
            proje_ozellikleri: "Proje Özellikleri",
            proje_ozellikleri_alt:
                "Site içerisindeki mini sokaklarını, titizlikle tasarlanmış peyzajıyla ayrıştırarak yürüyüş imkanları sunmaktadır. Gezintilerinize keyifli aralar verebileceğiniz ahşap çardaklar altında temiz havanın tadını çıkarabilirsiniz.",
            yeni_yasam:
                "Yeni Yaşam Alanınızın Konfor ve Huzur Dolu Ayrıntıları",
            yeni_yasam_alt:
                "İç mekanlarda tüm gereksinimleriniz göz önünde bulundurularak tasarlanmış bir çok konfor artırıcı özellik bulunmaktadır. Yaşamınıza huzur getirecek tüm ayrıntılar size ve ailenize yeni bir yaşamın en doğal halini sunmaktadır.",
            camene_doga:
                "Camene Doğa Villaları: Ferah ve Konforlu Yaşam Alanları",
            camene_doga_alt_1:
                "Camene Doğavillaları, 2 katlı 6+1 oda sayısı ile ferah ve ihtiyaçlarınıza yönelik yapısıyla bir çok özellik barındırmaktadır.",
            camene_doga_alt_2:
                "Villaların tamamında yerden ısıtma standart olarak vardır. Her villanın kendine ait terası ve 1 adet havuzu bulunmaktadır.",
            hizmetler: "Hizmetler",
            hizmetler_alt: "Entegre ettiğimiz hizmetlerimiz.",
            kapali_oto: "Kapalı Otopark",
            kapali_oto_alt: "Güvenli ve korunaklı kapalı otopark alanı.",
            jenerator: "Jeneratör",
            jenerator_alt: "Kesintisiz enerji için jeneratör sistemi.",
            climate: "Havalandırma Sistemleri",
            climate_alt: "Modern ve verimli havalandırma sistemleri.",
            ozel_site: "Özel site girişi ve güvenlik binası",
            ozel_site_alt: "Güvenli giriş ve güvenlik binası ile korunan site.",
            yangin_sondurme: "Spring ve yangın söndürme sistemleri",
            yangin_sondurme_alt:
                "Yangına karşı güvenlik sağlayan modern sistemler.",
            guvenlik_cam: "7/24 Kapalı devre kamera sistemi",
            guvenlik_cam_alt:
                "24 saat kesintisiz güvenlik sağlayan kamera sistemi.",
            komsunuz_doga: "Komşunuz doğa olsun!",
            komsunuz_doga_alt:
                "Camene Doğa villalarının çevresinde bir çok doğal ve tarihi güzellik bulunmaktadır. Güver uçurumu ve şelalesi, Düzler Çamı ve Termesos Milli Parkı gibi doğal alanları keşfetmek, en iyi aktiviteleriniz arasında yer alacak..",
        },
    },
    en: {
        translation: {
            title_news: "News",
            plans_title: "Plans",
            plans_alt: "Innovative and Aesthetic Architectural Plans",
            title_doga: "Discover our nature",

            terra_text:
                "Camene Nature is a life in touch with nature that you have dreamed of, 42 6+1 ultra luxury villa options are designed and consist of independent living spaces where comfort is at the forefront. Camene Doğa is designed to transform our longing for natural life into a living center that is more compatible with nature.",
            text_villa_tipleri: "Villa Types",
            tip: "TYPE",
            tip1_text:
                "Camene villas have 2 types of upper floor plans, the same, but the lower floor plans are divided into open kitchen and closed kitchen. Tip 1 has an open kitchen plan.",
            tip2_text:
                "Camene villas have 2 types of upper floor plans, the same, but the lower floor plans are divided into open kitchen and closed kitchen. Tip 1 has an open kitchen plan.",
            intermediate_text:
                "The interiors have many comfort-enhancing features designed with all your needs in mind. All the details that will bring peace to your life offer you and your family the most natural form of a new life.",
            tarih_text: "History at Your Doorstep",
            last_article:
                "There are many natural and historical beauties around Camene Nature villas. Exploring natural areas such as Güver cliff and waterfall, Düzler Pine and Termesos National Park will be among your best activities.",
            location: "Location",
            text_location: "Enjoy your location at the top",
            our_location: "Our location",
            our_location_text:
                "Camene has a great location on the eastern edge of the forest in the Nicosia area of Cyprus. It is close to the B20 motorway which connects to the main artery of the city. It is very close to residential areas, giving you close and reasonable distances for your needs in general.",
            Airport: "Airport",
            airport_time: "40 min",
            konya_text: "Konyaalti Beach Park",
            konya_time: "34 min",
            hospital: "Hospital",
            hospital_time: "19 min",
            castle_interior: "Castle interior",
            castle_interior_time: "46 min",
            Antalya_Science_Univ: "Antalya Science Univ",
            Antalya_Science_Univ_time: "23 min",
            Özdilek_Shopping_Mall: "Özdilek Shopping Mall",
            Özdilek_Shopping_Mall_time: "26 min",
            last_text:
                "There are many natural and historical beauties in Cyprus. Kyrenia Mountains and St. Exploring natural areas such as Hilarion Castle will be among your best activities. In addition, historical ruins such as the Ancient City of Salamis and Bellapais Monastery are among the historical activity opportunities around Cyprus waiting to be discovered. Cyprus offers unforgettable experiences to its visitors with its rich history and nature.",
            galeri_text: "Gallery",
            galeri_title: "Living Spaces of Your Dreams",
            banner_contact: "Contact",
            banner_text: "The view of nature is just a phone call away.",
            content_contact: "Contact ",
            content_contact_text:
                "Don't hesitate to contact us! You can call us, send us a message or find us on social media.",
            phone_text: "Phone:",
            Address: "Address:",
            proje_text: "We are starting a new project.",
            intertitle:
                "You can contact us with the information below to get to know us better and see our projects:",
            name_surname: "Name Surname",
            name_surname_placeholder: "Name Surname",
            phone: "Phone",
            email: "Email",
            your_message: "Your message",
            send_button: "Send",
            plan_menu: "Plans",
            About_Us_menu: "About Us",
            Projects_menu: "Projects",
            Features_menu: "Features",
            location_menu: "Location",
            gallery_menu: "Gallery",
            Contact_menu: "Contact",

            footer_comment:
                "Showcase projects with Camene especially made for architecture & interior design.",
            footer_newsletter: "Join our newsletter",
            camene_olarak: "As Camene",
            home_description:
                "Camene Architecture adds value to your living spaces by offering creative and sustainable designs. We bring together aesthetics and functionality.",
            mukkemmel_iklim: "Perfect Climate",
            mukemmel_iklim_1:
                "One of the most important factors affecting the purchase of a home in the Turkish Republic of Northern Cyprus (TRNC) is the region's mild climate. This Mediterranean island experiences a pleasant climate all year round, with over 300 sunny days each year and some of the highest winter temperatures in Europe.",
            mukemmel_iklim_2:
                "Cool Mediterranean winds relieve the scorching effect of the summer sun. While the temperature in summer is around 35 degrees, in winter the temperature does not fall below 5 degrees.",
            mukemmel_iklim_3:
                "Thanks to its mild climate throughout the year, Northern Cyprus has become a leading tourist destination and investment centre.",
            guvenlik_dusuk: "Safety and Low Crime Rate",
            guvenlik_dusuk_1: `It is said that the most important factor when buying real estate is "location".`,
            guvenlik_dusuk_2:
                "If you buy real estate in a privileged location, you will benefit from various opportunities as well as an increase in the value of the property thanks to future developments in the area.",
            kent_prj: "City project",
            home_projects: "PROJECTS",
            home_projects_aciklama:
                "We push architectural boundaries with future-shaping projects, blending functionality and aesthetics to create sustainable and innovative structures.",
            home_banner_2:
                "Contact us to discover the beauties of nature with Camene.",
            home_banner_2_btn: "Get in touch!",
            gallery: "Gallery",
            gallery_alt: "Visit our gallery to explore project details!",
            home_inside: "Home Inside",
            danismanlik: "Consulting",
            danismanlik_alt:
                "Our consulting services offer expert guidance and strategic solutions to manage your projects effectively. With our industry experience, we support you at every stage.",
            insaat_prj: "Construction Projects",
            insaat_prj_alt:
                "Our construction projects blend aesthetics and functionality to deliver quality and sustainable structures. Each project is tailored and executed according to specific needs.",
            mimarlik_buro: "Architecture Office",
            mimarlik_buro_alt:
                "Our architecture office brings your projects to life with creative and innovative designs. We specialize in creating modern and impactful structures.",
            insaat_girisim: "Construction Ventures",
            insaat_girisim_alt:
                "Our construction ventures focus on exploring industry opportunities and developing innovative projects. Each venture is carefully planned to achieve success.",
            proje_yonetimi: "Project Management",
            proje_yonetimi_alt:
                "In architectural projects, project management encompasses the entire process from design through to construction completion. This includes developing project timelines, managing budgets, and ensuring quality standards are met. Effective project management ensures coordination between design and construction teams, efficient use of resources, and management of potential risks.",
            insaat_isleri: "Construction Services",
            insaat_isleri_alt:
                "Our construction services provide high-standard construction work with quality materials and expert craftsmanship. Each project is meticulously managed and completed on time.",
            hakkimizda:
                "We offer a variety of services in the fields of architecture and interior design.",
            hakkimizda_2:
                "We are a team specialized in innovative and aesthetic designs. By understanding the needs and dreams of our clients, we provide functional and visually appealing solutions. We approach each project with attention to detail and a commitment to customer satisfaction. Our mission is to design your living spaces not just for living, but for enjoying. Work with us to transform your vision into reality.",
            gercek_prjs: "Implemented projects",
            gercek_prjs_side:
                "Our completed projects represent excellence and innovation. We achieve high-quality standards in every project, combining aesthetics and functionality to deliver the best solutions in the industry. Our portfolio is designed to inspire clients and exceed their expectations.",
            hakkimizda_trnslt: "About Us",
            projects: "Projects",
            projects_alt: "Innovative Architectural Achievements",
            projects_details_alt_main: "Modern and Comfortable Living Spaces",
            projects_li_1: "Show All",
            projects_li_2: "Building",
            projects_li_3: "Interior",
            projects_li_4: "Residence",
            projects_alt_title: "BUILDING",
            projects_details_baslik:
                "The Cyprus Urban Housing Project combines comfort and aesthetics by offering modern living spaces. Its smart design and high-quality construction provide an ideal living experience in Cyprus.",
            projects_details_title: "Cyprus Urban Housing Project",
            projects_details_alt:
                "The Cyprus Urban Housing Project stands out with its contemporary design and functionality. The project combines spacious living areas, modern architectural details, and high quality, offering a comfortable living experience in Cyprus. With its proximity to the city center and smart home systems, the project enhances the quality of life, providing an ideal living space for people of all ages.",
            projects_details_alt_2:
                "The use of innovative materials and sustainable design approaches in the project aims to create an environmentally friendly living space. The Cyprus Urban Housing Project not only offers a modern aesthetic but also emphasizes energy efficiency and environmental sensitivity. This makes it an excellent choice for those seeking both stylish and eco-friendly living environments.",
            year: "YEAR:",
            client: "CLİENT:",
            client_alt: "Private Residence",
            architects: "ARCHITECTS:",
            architects_alt: "Camene",
            location_: "LOCATION:",
            location_alt: "Cyprus",
            projects_details_li_1: "Home",
            projects_details_li_2: "Projects",
            projects_details_li_3: "Cyprus Urban Housing Project",
            ozellikler: "Project Features",
            ozellikler_alt: "A Blend of Aesthetics and Functionality",
            proje_ozellikleri: "Project Features",
            proje_ozellikleri_alt:
                "The project offers walking opportunities with its mini streets and meticulously designed landscaping. You can enjoy the fresh air under wooden pergolas where you can take pleasant breaks during your strolls.",
            yeni_yasam: "Comfort and Serenity Details of Your New Living Space",
            yeni_yasam_alt:
                "The interiors are designed with various comfort-enhancing features considering all your needs. Every detail aims to provide you and your family with the most natural form of a new living experience that brings tranquility.",
            camene_doga:
                "Camene Nature Villas: Spacious and Comfortable Living Spaces",
            camene_doga_alt_1:
                "Camene Nature Villas, with their 6+1 room layout over 2 floors, offer a range of features with a spacious and needs-oriented design.",
            camene_doga_alt_2:
                "All villas come with underfloor heating as a standard feature. Each villa includes its own terrace and 1 private pool.",
            hizmetler: "Services",
            hizmetler_alt: "Our integrated services.",
            kapali_oto: "Closed Parking",
            kapali_oto_alt: "Secure and protected closed parking area.",
            jenerator: "Generator",
            jenerator_alt: "Generator system for uninterrupted power.",
            climate: "Ventilation Systems",
            climate_alt: "Modern and efficient ventilation systems.",
            ozel_site: "Private Site Entrance and Security Building",
            ozel_site_alt:
                "Secured site with private entrance and security building.",
            yangin_sondurme: "Sprinkler and Fire Extinguishing Systems",
            yangin_sondurme_alt: "Modern systems providing fire safety.",
            guvenlik_cam: "24/7 Closed-Circuit Camera System",
            guvenlik_cam_alt:
                "Camera system providing continuous 24-hour security.",
            komsunuz_doga: "Let Nature Be Your Neighbor!",
            komsunuz_doga_alt:
                "The Camene Nature Villas are surrounded by many natural and historical beauties. Exploring natural areas such as Güver Cliff and Waterfall, Düzler Çamı, and Termessos National Park will be among your best activities.",
        },
    },
};
i18n.use(initReactI18next).init({
    lng: localStorage.getItem("lang"),
    interpolation: {
        escapeValue: false,
    },
    fallbackLng: "tr", //  siteye girdiği gibi tr olarak görülsün
    resources,
});

export default i18n;
