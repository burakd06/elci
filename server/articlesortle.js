import fs from 'fs';


const articles = [
    {
      "url": "http://localhost:3001/"
    },
    {
      "url": "http://localhost:3001/company/about",
      "content": [
        "Ar-Ge’yi sadece bir bölüm olarak değil, aynı zamanda işletme kültürü olarak benimseyen sektörün öncü kuruluşlarındandır. Her zaman kendini büyümeye odaklamış işletmelerin ihtiyaçlarına göre dinamik çözüm üretme yapısına sahip sektörün hızlı büyüyen işletmelerindendir. Kullandığımız teknolojiler, işletmelerin ihtiyacına göre çoklu ve tekli platformlarda kullanılabilecek şekilde üretim yapmaktayız.",
        " Neden Biz",
        "Neden bizi tercih etmelisiniz ?",
        "Dijital dönüşümle birlikte fatura süreçlerini en üst düzeye çıkararak, müşteri memnuniyetini ön planda tutan, yenilikçi ve sürdürülebilir çözümler sunan lider bir şirket olmaktır.",
        "Uygulamalarımız ile rahat ve pratik bir şekilde işlemlerinizi gerçekleştirebilirsiniz.",
        "Fatura çözümlerimiz, işletmelerin fatura süreçlerini kolaylaştırarak otomatikleştirilmiş, hızlı ve güvenilir bir şekilde e-fatura, e-arşiv, e-irsaliye gibi belgeleri oluşturma, yönetme ve arşivleme imkanı sunar.",
        "Kullandığımız teknolojiler, işletmelerin ihtiyacına göre çoklu ve tekli platformlarda kullanılabilecek şekilde üretim yapmaktayız.",
        "Faturalarınızı daha hızlı yönetebilir, mevcut programlarınızı pazaryeri entegrasyonu ile çalıştırabilir, faturalarınızı genel muhasebe yazılımına kolayca aktarabilir, mevcut muhasebe yazılımınızı e-fatura, e-arşiv fatura, e-defter modülü ile avantajlı bir şekilde yönetebilirsiniz.",
        "Kullandığımız teknolojiler, işletmelerin ihtiyacına göre çoklu ve tekli platformlarda kullanılabilecek şekilde üretim yapmaktayız.",
        " +90 (212) 909 97 27",
        " info@etrsoft.com",
        " www.elçiyazılım.com"
      ]
    },
    {
      "url": "http://localhost:3001/company/contact",
      "content": [
        "İletişim",
        "(+90) 212 909  97 27",
        "Fevzi Çakmak Cad. Meriç Sk. Toyak İş Merkezi No:11/210 Bahçelievler / İSTANBUL",
        "19034 Verna Unions Apt. 164 - Honolulu, RI / 87535",
        "",
        "Kullandığımız teknolojiler, işletmelerin ihtiyacına göre çoklu ve tekli platformlarda kullanılabilecek şekilde üretim yapmaktayız.",
        " +90 (212) 909 97 27",
        " info@etrsoft.com",
        " www.elçiyazılım.com"
      ]
    },
    {
      "url": "http://localhost:3001/company/blog",
      "content": [
        "Kullandığımız teknolojiler, işletmelerin ihtiyacına göre çoklu ve tekli platformlarda kullanılabilecek şekilde üretim yapmaktayız.",
        " +90 (212) 909 97 27",
        " info@etrsoft.com",
        " www.elçiyazılım.com"
      ]
    },
    {
      "url": "http://localhost:3001/company/İnsanKaynaklari",
      "content": [
        "İş Başvurusu",
        "Kullandığımız teknolojiler, işletmelerin ihtiyacına göre çoklu ve tekli platformlarda kullanılabilecek şekilde üretim yapmaktayız.",
        " +90 (212) 909 97 27",
        " info@etrsoft.com",
        " www.elçiyazılım.com"
      ]
    },
    {
      "url": "http://localhost:3001/company/e-mustahsil",
      "content": [
        "e- Mustahsil Makbuzu",
        "e-Müstahsil makbuzu, tarım sektöründe faaliyet gösteren ve vergi mükellefi olmayan çiftçilerin düzenlediği bir belgedir. Geleneksel müstahsil makbuzunun elektronik versiyonudur. Kağıt ortamındaki müstahsil makbuzları, dijital platformlarda oluşturularak saklanır. Bu sistem, işlemleri hızlandırır, kağıt israfını azaltır ve belgelerin kolayca arşivlenmesini sağlar. e-Müstahsil makbuzu, dijital dönüşümle birlikte, tarım ürünlerinin satışını belgelemek için kullanılan modern ve çevre dostu bir belgedir.",
        "Sizin işinizi kolaylaştırmak bizim işimiz (bu yazı silinebilir)",
        "Neden e- Müstahsil Makbuzu ?",
        "e-Müstahsil makbuzu, müstahsil makbuzlarının dijital versiyonudur. İşlemleri hızlandırır, kağıt kullanımını azaltır ve çevreye katkıda bulunur. Ayrıca, belgeleri kolayca dijital ortamda arşivlemenizi sağlar.",
        "Kullandığımız teknolojiler, işletmelerin ihtiyacına göre çoklu ve tekli platformlarda kullanılabilecek şekilde üretim yapmaktayız.",
        " +90 (212) 909 97 27",
        " info@etrsoft.com",
        " www.elçiyazılım.com"
      ]
    },
    {
      "url": "http://localhost:3001/company/e-fatura",
      "content": [
        "e- Fatura",
        "e-Fatura, faturaların dijital ortamda oluşturulup iletildiği bir sistemdir. Bu sistem, fatura işlemlerini hızlandırır, kağıt kullanımını ortadan kaldırır ve belgelerin kolayca saklanmasını sağlar. Hem zaman hem de maliyet tasarrufu sağlar ve çevre dostu bir çözümdür.",
        "Sizin işinizi kolaylaştırmak bizim işimiz (bu yazı silinebilir)",
        "Neden e- Fatura ?",
        "e-Fatura kullanmanın birçok avantajı vardır. Dijital ortamda faturaların hızlı ve güvenli bir şekilde iletilmesini sağlar, kağıt kullanımını azaltarak çevreye katkıda bulunur ve belgelerin düzenli bir şekilde arşivlenmesine olanak tanır. Bu sistem, işlem sürelerini kısaltır ve maliyetleri düşürür, ayrıca verimliliği artırarak iş süreçlerini daha etkili hale getirir.",
        "e-Fatura sayesinde faturalarınızı dijital ortamda hızlı ve güvenli bir şekilde işleyebilirsiniz. Kağıt kullanımını ortadan kaldırarak çevre dostu bir yaklaşım benimser ve belgelerinizi kolayca dijital olarak arşivlersiniz. Bu yöntem, işlemlerinizin daha hızlı gerçekleşmesini sağlar ve maliyetlerinizi azaltarak verimliliğinizi artırır.",
        "Kullandığımız teknolojiler, işletmelerin ihtiyacına göre çoklu ve tekli platformlarda kullanılabilecek şekilde üretim yapmaktayız.",
        " +90 (212) 909 97 27",
        " info@etrsoft.com",
        " www.elçiyazılım.com"
      ]
    },
    {
      "url": "http://localhost:3001/company/e-arsivfatura",
      "content": [
        "e-Arsiv Fatura",
        "e-Fatura ile e-Arşiv faturanın uygulamada bir farkı olmayıp yalnızca faturayı alan tarafın e-fatura mükellefi olmadığı durumlarda kesilen fatura e-arşiv fatura olmaktadır. Ayrıca, Gelir idaresi başkanlığının (GİB) sisteminde e-fatura mükellefi olmayan firmaların 2 bin tl üzeri tutarlar için kestikleri faturalar da e-Arşiv faturalar olarak isimlendirilir. Bu İki e-arşiv fatura türü arasındaki fark ise, e-fatura mükellefinin kestiği e-arşiv faturada yetkilinin imzası bulunur.",
        "Sizin işinizi kolaylaştırmak bizim işimiz (bu yazı silinebilir)",
        "Neden e- Arsiv Fatura ?",
        "e-Arşiv Fatura, kağıt faturaların dijital ortama taşınmasıdır. Bu sistem sayesinde faturalar daha hızlı, güvenilir ve çevre dostu bir şekilde yönetilebilir. e-Arşiv Fatura ile faturalar anında alınabilir, kolayca saklanabilir ve arşivlenebilir. Ayrıca, kağıt israfını önler ve iş süreçlerini daha düzenli hale getirir. Sürdürülebilir bir yaklaşım benimsemek ve işlemleri kolaylaştırmak için e-Arşiv Fatura kullanımı önerilir.",
        "e-Arşiv Fatura ile faturalarınızı dijital ortamda güvenli ve hızlı bir şekilde yönetebilirsiniz. Kağıt israfını önleyerek çevreye katkıda bulunur ve tüm belgelerinizi düzenli bir şekilde arşivlemenizi sağlar. Bu sistem sayesinde, işlemlerinizde hız ve verimlilik kazanarak zaman ve maliyet tasarrufu elde edebilirsiniz.",
        "Kullandığımız teknolojiler, işletmelerin ihtiyacına göre çoklu ve tekli platformlarda kullanılabilecek şekilde üretim yapmaktayız.",
        " +90 (212) 909 97 27",
        " info@etrsoft.com",
        " www.elçiyazılım.com"
      ]
    },
    {
      "url": "http://localhost:3001/company/e-irsaliye",
      "content": [
        "e-İrsaliye",
        "e-İrsaliye, mal teslimatını dijital ortamda belgeleyen elektronik bir belgedir. Kağıt yerine geçen bu belge, teslimat bilgilerini hızla ve çevre dostu bir şekilde iletir. Elektronik olarak saklanabilir ve işlemleri daha verimli hale getirir.          ",
        "Sizin işinizi kolaylaştırmak bizim işimiz (bu yazı silinebilir)",
        "Neden e-İrsaliye ?",
        "e-İrsaliye kullanmak, iş süreçlerini büyük ölçüde iyileştirir. Bu sistem, mal teslimatlarını dijital ortamda hızlı ve güvenli bir şekilde gerçekleştirmenizi sağlar. Kağıt kullanımını ortadan kaldırarak çevre dostu bir yaklaşım benimser ve işlemlerinizin daha verimli olmasına yardımcı olur. Ayrıca, e-İrsaliye belgeleri kolayca arşivlenir ve dijital ortamda saklanabilir, böylece belgelere hızlı ve kolay erişim sağlanır. Bu sayede hem zaman hem de maliyet açısından tasarruf edebilirsiniz.",
        "e-İrsaliye ile mal teslimatlarınızı dijital ortamda hızlı ve güvenli bir şekilde yönetebilirsiniz. Kağıt israfını önleyerek çevreye katkıda bulunur ve tüm irsaliyelerinizi düzenli bir şekilde arşivlemenizi sağlar. Bu sistem sayesinde, işlemlerinizde hız ve verimlilik kazanarak zaman ve maliyet tasarrufu elde edebilirsiniz.",
        "Kullandığımız teknolojiler, işletmelerin ihtiyacına göre çoklu ve tekli platformlarda kullanılabilecek şekilde üretim yapmaktayız.",
        " +90 (212) 909 97 27",
        " info@etrsoft.com",
        " www.elçiyazılım.com"
      ]
    },
    {
      "url": "http://localhost:3001/company/e-serbestmeslekmakbuzu",
      "content": [
        "e-Serbest Meslek Makbuzu",
        "e-SERBEST MESLEK MAKBUZU, serbest meslek erbaplarının hizmet karşılığında düzenlediği dijital bir belgedir. Geleneksel kağıt makbuzların yerini alarak, işlemleri elektronik ortamda yapmayı sağlar. Vergi mükellefleri, e-SMM ile hizmet sunduklarında makbuzlarını dijital olarak oluşturur ve müşterilerine iletir. Bu sistem, kağıt kullanımını azaltarak çevreye katkıda bulunur ve belge yönetimini kolaylaştırır. Ayrıca, vergi süreçlerini daha düzenli ve hızlı hale getirir",
        "Sizin işinizi kolaylaştırmak bizim işimiz (bu yazı silinebilir)",
        "Neden e- Serbest Meslek Makbuzu ?",
        "e-SMM, işlemlerinizi dijital ortamda hızlı ve güvenli bir şekilde yapmanızı sağlar. Kağıt makbuzların yerini alarak, çevreye katkıda bulunur ve belgelerinizi kolayca arşivlemenizi sağlar. Bu sistem sayesinde, vergi süreçlerinizi daha düzenli ve verimli yönetebilir, zaman ve maliyet tasarrufu elde edebilirsiniz. Ayrıca, işlemlerinizin daha hızlı gerçekleşmesini ve hataların azaltılmasını sağlar.",
        "e-Serbest Meslek Makbuzu, hizmetlerinizi dijital ortamda hızlı ve güvenli bir şekilde belgelendirmenizi sağlar. Kağıt israfını önler, çevreye katkıda bulunur ve makbuzlarınızı düzenli olarak arşivlemenize imkan tanır. Bu sistem, verimliliği artırır ve zaman ile maliyet tasarrufu sağlar.",
        "Kullandığımız teknolojiler, işletmelerin ihtiyacına göre çoklu ve tekli platformlarda kullanılabilecek şekilde üretim yapmaktayız.",
        " +90 (212) 909 97 27",
        " info@etrsoft.com",
        " www.elçiyazılım.com"
      ]
    },
    {
      "url": "http://localhost:3001/company/e-defter",
      "content": [
        "e-Defter",
        "e-Defter, şirketlerin yasal defterlerini dijital ortamda tutmalarına olanak tanıyan bir sistemdir. Bu sistem, Vergi Usul Kanunu ve Türk Ticaret Kanunu'na uygun şekilde elektronik ortamda kayıt tutmayı sağlar. Kağıt defter yerine dijital ortamda saklanan e-Defter, muhasebe süreçlerini hızlandırır, arşivleme ve denetim süreçlerini kolaylaştırır.",
        "Sizin işinizi kolaylaştırmak bizim işimiz (bu yazı silinebilir)",
        "Neden e-Defter ?",
        "e-Defter, şirketler için birçok avantaj sunar. Dijital ortamda muhasebe kayıtlarını tutarak kağıt kullanımını ortadan kaldırır ve çevreye katkıda bulunur. Verilerin güvenli bir şekilde saklanmasını sağlar ve yasal gerekliliklere uygunluğu garantiler. Ayrıca, denetim ve vergi süreçlerini hızlandırarak zaman ve maliyet tasarrufu sağlar. e-Defter kullanarak, iş süreçlerinizi daha verimli ve düzenli bir şekilde yönetebilirsiniz.",
        "e-Defter, muhasebe kayıtlarını dijital ortamda tutarak kağıt kullanımını azaltır ve çevreye katkıda bulunur. Verileri güvenli ve düzenli bir şekilde saklar, denetimleri hızlandırır ve maliyet tasarrufu sağlar.",
        "Kullandığımız teknolojiler, işletmelerin ihtiyacına göre çoklu ve tekli platformlarda kullanılabilecek şekilde üretim yapmaktayız.",
        " +90 (212) 909 97 27",
        " info@etrsoft.com",
        " www.elçiyazılım.com"
      ]
    },
    {
      "url": "http://localhost:3001/company/e-saklama",
      "content": [
        "e-Saklama",
        "e-Saklama, belgelerin ve kayıtların dijital ortamda güvenli bir şekilde saklanmasını sağlayan bir sistemdir. Bu sistem, kağıt belgelerin dijital versiyonlarını arşivleyerek fiziksel alan tasarrufu sağlar, erişim ve yönetimi kolaylaştırır ve belgelerin kaybolma riskini azaltır. Ayrıca, düzenli yedeklemeler ve güvenlik önlemleri ile verilerin korunmasına yardımcı olur.",
        "Sizin işinizi kolaylaştırmak bizim işimiz (bu yazı silinebilir)",
        "Neden e- Saklama ?",
        "e-Saklama kullanmak, belgelerinizi dijital ortamda güvenli ve düzenli bir şekilde saklamanıza olanak tanır. Kağıt belgelerin aksine, dijital arşivler fiziksel alan tasarrufu sağlar ve belgelerinizi kolayca erişilebilir kılar. Ayrıca, veri kaybı riskini azaltır ve yedekleme, arama gibi işlemleri daha hızlı ve etkili bir şekilde gerçekleştirmenizi sağlar. Bu sistem, verimliliği artırır ve işletme süreçlerini daha sürdürülebilir hale getirir.",
        "e-Saklama ile belgelerinizi dijital ortamda güvenli bir şekilde saklayabilir ve hızlıca erişebilirsiniz. Kağıt kullanımını ortadan kaldırarak çevreyi korur ve belgelerinizi düzenli bir şekilde arşivlemenize imkan tanır. Bu sistem sayesinde işlemlerinizi daha hızlı ve verimli yöneterek zaman ve maliyet avantajı sağlayabilirsiniz.",
        "Kullandığımız teknolojiler, işletmelerin ihtiyacına göre çoklu ve tekli platformlarda kullanılabilecek şekilde üretim yapmaktayız.",
        " +90 (212) 909 97 27",
        " info@etrsoft.com",
        " www.elçiyazılım.com"
      ]
    },
    {
      "url": "http://localhost:3001/company/e-imza",
      "content": [
        "e-İmza",
        "e-İmza, dijital ortamda belgelerin ve verilerin kimliğini doğrulamak ve güvenliğini sağlamak için kullanılan elektronik bir imzadır. Geleneksel imzaların dijital versiyonu olan e-İmza, hukuki geçerliliği olan bir doğrulama aracıdır ve belgelerin üzerinde yapılan değişiklikleri izlemeye olanak tanır. E-İmza, kişisel veya kurumsal belgelerin güvenli bir şekilde imzalanmasını sağlar ve işlem sürecini hızlandırır.",
        "Sizin işinizi kolaylaştırmak bizim işimiz (bu yazı silinebilir)",
        "Neden e- İmza ?",
        "e-İmza, dijital ortamda belge ve işlemleri güvenli bir şekilde imzalamanızı sağlar. Kağıt kullanımını azaltır ve çevreye katkıda bulunur. Aynı zamanda, belgeler üzerinde hızlı ve etkili doğrulama yaparak zaman ve maliyet tasarrufu sağlar. Bu sayede, işlemlerinizde verimlilik kazanabilir ve bürokratik süreçleri basitleştirebilirsiniz.",
        "e-İmza ile belgelerinizi dijital ortamda güvenli ve hızlı bir şekilde onaylayabilirsiniz. Kağıt kullanımını ortadan kaldırarak çevre dostu bir yaklaşım benimser ve belgelerinizi düzenli bir şekilde dijital ortamda saklarsınız. Bu sistem, işlemlerde hız ve verimlilik sağlayarak zaman ve maliyet avantajı sunar.",
        "Kullandığımız teknolojiler, işletmelerin ihtiyacına göre çoklu ve tekli platformlarda kullanılabilecek şekilde üretim yapmaktayız.",
        " +90 (212) 909 97 27",
        " info@etrsoft.com",
        " www.elçiyazılım.com"
      ]
    },
    {
      "url": "http://localhost:3001/company/kep",
      "content": [
        "Kep",
        "KEP (Kayıtlı Elektronik Posta), resmi ve hukuki geçerliliği olan elektronik postaların güvenli bir şekilde gönderilip alınmasını sağlayan bir sistemdir. KEP, gönderici ve alıcı arasında gönderilen e-postaların içeriğini, gönderim tarihini ve saatini kanıtlamak için kullanılır. Ayrıca, KEP sistemi e-posta ile yapılan işlemlerin doğruluğunu ve güvenliğini sağlar, böylece yasal süreçlerde geçerli bir belge olarak kabul edilir.",
        "Sizin işinizi kolaylaştırmak bizim işimiz (bu yazı silinebilir)",
        "Neden Kep ?",
        "KEP (Kayıtlı Elektronik Posta), resmi ve hukuki işlemlerinizde önemli avantajlar sunar. Güvenli bir iletişim ortamı sağlar ve gönderdiğiniz e-postaların içeriğini, gönderim tarihini ve saatini kanıtlar. Bu sayede, elektronik postalarınızın yasal geçerliliğini artırır ve işlemlerinizin doğruluğunu güvence altına alır. Ayrıca, KEP ile kağıt kullanımını azaltarak çevreye katkıda bulunabilir ve işlemlerinizin hızını ve verimliliğini artırabilirsiniz.",
        "KEP, yazışmalarınızı güvenli ve hızlı bir şekilde dijital ortamda yapmanıza olanak tanır. Kağıt israfını önler, çevreye katkıda bulunur ve işlemlerinizi hızlandırarak maliyetlerinizi azaltır.",
        "Kullandığımız teknolojiler, işletmelerin ihtiyacına göre çoklu ve tekli platformlarda kullanılabilecek şekilde üretim yapmaktayız.",
        " +90 (212) 909 97 27",
        " info@etrsoft.com",
        " www.elçiyazılım.com"
      ]
    }
  ]
  const articlesWithId = articles.map(article => {
    return {
      url: article.url,
      content: article.content ? article.content.map((text, index) => ({
        id: index + 1 + article.content.length * articles.indexOf(article), // benzersiz ID oluşturma
        text: text
      })) : [] // Eğer content undefined ise boş dizi döner
    };
  });


  fs.writeFile('data.json', JSON.stringify(articlesWithId, null, 2), (err) => {
    if (err) {
      console.error('Dosya yazılırken hata oluştu:', err);
    } else {
      console.log('data.json dosyasına başarıyla yazıldı.');
    }
  });
  
  console.log(JSON.stringify(articlesWithId, null, 2));