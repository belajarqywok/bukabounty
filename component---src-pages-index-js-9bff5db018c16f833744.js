(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{237:function(a,e,n){"use strict";n.r(e);var t=n(283),i=n(0),r=n.n(i),l=n(143),m=n(241),o=n(353),u=n(356),s=n(354),c=n(336),p=n(337),d=n(335),k=n(357),g=n(344),b=n(352),h=n(339),y=n(360),E=n(338),f=n(359),S=n(361),v=[{label:"Tulis laporan dengan email",content:r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,"Anda tidak perlu menuliskan laporan pada file PDF, cukup tuliskan di badan email saja. Bagian-bagian yang wajib ada pada laporan adalah:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Jenis celah keamanan yang ditemukan."),r.a.createElement("li",null,"Langkah-langkah singkat yang diperlukan untuk mereplikasi celah keamanan."),r.a.createElement("li",null,"Bukti atau Proof of Concept (PoC) yang dapat berbentuk gambar atau video. Jadikan sebagai lampiran email."),r.a.createElement("li",null,"Dampak yang dapat ditimbulkan akibat adanya celah keamanan ini.")))},{label:"Kirim ke security@bukalapak.com",content:r.a.createElement(r.a.Fragment,null,"Kirimkan laporan ke ",r.a.createElement(c.a,{color:"primary",target:"_blank",rel:"noopener noreferrer",href:"mailto:security@bukalapak.com"},"security@bukalapak.com")," dengan subjek berformat:",r.a.createElement("br",null),r.a.createElement("b",null,"[BUKABOUNTY] Judul Laporan"),r.a.createElement("br",null),r.a.createElement("br",null),"Contoh: [BUKABOUNTY] Stored XSS pada Ulasan Barang")},{label:"Tunggu balasan",content:r.a.createElement(r.a.Fragment,null,"Silakan tunggu balasan dari kami. Kami akan membalas email hanya pada hari dan jam efektif kerja (Senin-Jumat pukul 10.00-17.00 WIB). Cepat atau tidaknya respon kami terhadap laporan Anda bergantung pada kelengkapan dan kejelasan bukti yang disertakan.")}],B=Object(m.a)(function(a){return{paper:{marginBottom:a.spacing(2)},stepperActions:{marginTop:a.spacing(1),marginBottom:a.spacing(1)},stepperButton:{marginTop:a.spacing(1),marginRight:a.spacing(1)},stepperActionsReset:{marginBottom:a.spacing(2),marginLeft:a.spacing(2)},image:{maxWidth:"100%"}}});n(16);var w=n(340),C=n(341),P=n(342),A=n(343),R=n(295),D=n.n(R),F=n(296),N=n.n(F),j=n(297),T=n.n(j),L=[{domain:"www.bukalapak.com",description:"Bukalapak versi desktop",icon:r.a.createElement(D.a,null)},{domain:"m.bukalapak.com",description:"Bukalapak versi mobile",icon:r.a.createElement(N.a,null)},{domain:"api.bukalapak.com",description:"API Bukalapak",icon:r.a.createElement(T.a,null)},{domain:"seller.bukalapak.com",description:"Bukalapak seller center untuk pelapak",icon:r.a.createElement(D.a,null)},{domain:"mitra.bukalapak.com",description:"Progressive web app (PWA) untuk mitra Bukalapak",icon:r.a.createElement(N.a,null)}],I=[{name:"Remote Command Execution (RCE)",description:"Cukup tampilkan output dari command id dan IP internal sebagai PoC"},{name:"Leaked Private Keys",description:"Kecuali key sudah tidak digunakan lagi oleh Bukalapak"},{name:"SQL/NoSQL Injection",description:"Cukup tampilkan output SELECT user() sebagai PoC"},{name:"Local/Remote File Inclusion (LFI/RFI)"},{name:"Authentication Bypass"},{name:"Multi-factor Authentication Bypass",description:"Bypass OTP untuk untrusted devices"},{name:"Cross-Site Scripting (XSS)",description:"Kecuali XSS yang hanya berdampak pada diri sendiri (Self-XSS)"},{name:"Broken Access Control",description:"Cukup tampilkan 1 atau 2 data sebagai PoC"},{name:"Server-Side Request Forgery (SSRF)",description:"Hanya SSRF ke jaringan internal"},{name:"Cross-Site Request Forgery (CSRF)",description:"Kecuali CSRF pada logout atau memang disengaja untuk user anonymous"},{name:"Business Logic Flaws",description:"Celah yang dapat merugikan Bukalapak atau penggunanya"}],M=[{name:"Temuan yang melanggar aturan dan/atau di luar cakupan"},{name:"Temuan dengan risiko rendah",description:"Self XSS, Login/Logout CSRF, CORS tanpa melampirkan bukti yang berakibat kepada pengguna lain"},{name:"Pemakaian automated scanner",description:"Hasil output dari tools seperti Nmap, SSL Scan, dan lainnya tidak diterima"},{name:"Social engineering",description:"Memanfaatkan phising/fraud diluar Bukalapak (email, sms, facebook messenger, whatsapp, dan lainnya)"},{name:"Open redirects",description:"Pada kasus tertentu, kami akan memproses jika risikonya tinggi. Misalnya mampu melakukan pencurian token"},{name:"Missing security headers",description:"Contoh: HSTS, cookie flags, X-Frame-Options, X-XSS-Protection, dll"},{name:"DDoS",description:"Kecuali DoS pada level aplikasi dan eksploitnya mudah"},{name:"Clickjacking"}],J=Object(m.a)(function(a){return{paper:{marginBottom:a.spacing(2)},stepperActions:{marginTop:a.spacing(1),marginBottom:a.spacing(1)},stepperButton:{marginTop:a.spacing(1),marginRight:a.spacing(1)},stepperActionsReset:{marginBottom:a.spacing(2),marginLeft:a.spacing(2)}}});var x=[{date:"8 Juli 2019",changes:["Penambahan seller.bukalapak.com dan mitra.bukalapak.com ke dalam cakupan bug bounty.","Perhitungan poin dan ranking pada Wall of Fame."]}];n(33),n(27),n(124),n(300),n(4),n(3),n(2),n(13);var K=n(350),O=n(351),W=n(349),U=n(355),q=n(348),_=n(7),X=n.n(_),H=n(347),z=n(363),G=n(362);function Q(a){var e=a.order,n=a.orderBy,t=a.onRequestSort;function i(a){return a.tooltip?r.a.createElement(G.a,{title:a.tooltip},r.a.createElement("span",null,a.label)):a.label}return r.a.createElement(H.a,null,r.a.createElement(q.a,null,a.headers.map(function(a){return r.a.createElement(W.a,{key:a.id,size:"small",align:a.numeric?"right":"left",sortDirection:n===a.id&&e,padding:a.disablePadding?"none":"default"},a.sortable?r.a.createElement(z.a,{active:n===a.id,direction:e,onClick:(l=a.id,function(a){t(a,l)})},i(a)):i(a));var l})))}Q.propTypes={headers:X.a.array.isRequired,onRequestSort:X.a.func.isRequired,order:X.a.string.isRequired,orderBy:X.a.string.isRequired};var Y=[{name:"Ichsan Adit",profile:null,lastSubmission:Date.parse("July 9, 2018"),bounties:{medium:0,high:1,critical:0,emergency:0}},{name:"Luthfi Bia Susilo Putra",profile:"https://medium.com/@trimatrasec",lastSubmission:Date.parse("January 22, 2019"),bounties:{medium:1,high:0,critical:1,emergency:0}},{name:"Bastian Welfrid",profile:null,lastSubmission:Date.parse("June 21, 2019"),bounties:{medium:4,high:2,critical:0,emergency:0}},{name:"Fathur Waldi L",profile:null,lastSubmission:Date.parse("July 11, 2018"),bounties:{medium:1,high:0,critical:0,emergency:0}},{name:"Tomi A",profile:"https://www.linkedin.com/in/tomi-a-3b7a0a11b/",lastSubmission:Date.parse("November 23, 2018"),bounties:{medium:0,high:1,critical:0,emergency:0}},{name:"Arif Mukhlis",profile:"https://medium.com/@arifmukhlis",lastSubmission:Date.parse("May 12, 2019"),bounties:{medium:1,high:2,critical:0,emergency:0}},{name:"M Irfan Sulaiman",profile:"https://linkedin.com/in/mirfansulaiman/",lastSubmission:Date.parse("January 12, 2019"),bounties:{medium:2,high:0,critical:0,emergency:0}},{name:"Abdillah Muhammad Hasni",profile:"https://abdilahrf.github.io/",lastSubmission:Date.parse("June 26, 2019"),bounties:{medium:2,high:0,critical:0,emergency:0}},{name:"Dicky Achmad Fauzi",profile:"https://twitter.com/dckyachmd",lastSubmission:Date.parse("February 18, 2019"),bounties:{medium:0,high:1,critical:0,emergency:0}},{name:"Rahmadil Adha",profile:"https://www.linkedin.com/in/rahmadil-adha-5011435a/",lastSubmission:Date.parse("February 25, 2019"),bounties:{medium:0,high:1,critical:0,emergency:0}},{name:"Nosa Shandy",profile:"https://apapedulimu.click/",lastSubmission:Date.parse("March 7, 2019"),bounties:{medium:2,high:0,critical:0,emergency:0}},{name:"Bahtiyar Istiyarno",profile:"https://www.linkedin.com/in/bahtiyar-istiyarno/",lastSubmission:Date.parse("April 28, 2019"),bounties:{medium:1,high:0,critical:0,emergency:0}},{name:"Mukul Malviya",profile:"https://www.linkedin.com/in/mukul-malviya-16a40a121/",lastSubmission:Date.parse("April 30, 2019"),bounties:{medium:1,high:0,critical:0,emergency:0}},{name:"M. Bilal Giri Nabhan",profile:"https://linkedin.com/in/bilalgiri",lastSubmission:Date.parse("May 18, 2019"),bounties:{medium:0,high:1,critical:0,emergency:0}},{name:"Abir Khan",profile:null,lastSubmission:Date.parse("May 26, 2019"),bounties:{medium:1,high:0,critical:0,emergency:0}}],V={low:0,medium:10,high:20,critical:30,emergency:50};function Z(a,e,n,t){return e[n]<a[n]?-1:e[n]>a[n]?1:t?-Z(a,e,t):0}function $(a,e,n){return"desc"===a?function(a,t){return Z(a,t,e,n)}:function(a,t){return-Z(a,t,e,n)}}var aa=[{id:"rank",label:"Rank",numeric:!1,sortable:!0},{id:"name",label:"Name",numeric:!1,sortable:!0},{id:"bounties_emergency",label:"Emergency",tooltip:V.emergency+" points",numeric:!0,sortable:!0},{id:"bounties_critical",label:"Critical",tooltip:V.critical+" points",numeric:!0,sortable:!0},{id:"bounties_high",label:"High",tooltip:V.high+" points",numeric:!0,sortable:!0},{id:"bounties_medium",label:"Medium",tooltip:V.medium+" points",numeric:!0,sortable:!0},{id:"points",label:"Points",tooltip:"Total",numeric:!0,sortable:!0}],ea=Y.map(function(a){for(var e=0,n=Object.keys(V);e<n.length;e++){var t=n[e];a["bounties_"+t]=a.bounties[t]}return a.points=Object.keys(a.bounties).reduce(function(e,n){return e+a.bounties[n]*V[n]},0),a}),na=1,ta=ea.sort($("desc","points")),ia=Array.isArray(ta),ra=0;for(ta=ia?ta:ta[Symbol.iterator]();;){var la;if(ia){if(ra>=ta.length)break;la=ta[ra++]}else{if((ra=ta.next()).done)break;la=ra.value}la.rank=na++}var ma=Object.freeze(ea),oa=Object(m.a)(function(a){return{root:{width:"100%"},paper:{width:"100%",marginBottom:a.spacing(2)},table:{minWidth:750},tableWrapper:{overflowX:"auto"}}});n.d(e,"default",function(){return ca});var ua=[{label:"Bug Bounty",component:r.a.createElement(function(){var a=B(),e=r.a.useState(0),n=e[0],t=e[1];function i(){t(function(a){return a+1})}function l(){t(function(a){return a-1})}return r.a.createElement(d.a,{component:"div",align:"justify"},r.a.createElement(d.a,{variant:"h5",gutterBottom:!0},"Temukan celah, dapat hadiah!"),r.a.createElement(d.a,{variant:"body1",paragraph:!0},"Secanggih apapun teknologinya, takkan pernah ada yang terlindungi sempurna. Kami pun merasakan hal yang sama, dan menyadari bahwa kolaborasi dengan para periset keamanan punya peran krusial dalam meningkatkan kualitas keamanan kami. Jika Anda yakin telah menemukan celah keamanan pada produk dan layanan Bukalapak, jangan ragu untuk segera melaporkannya. Dengan senang hati, kami akan berdiskusi dan bekerja sama untuk menyelesaikan masalah itu."),r.a.createElement(d.a,{variant:"body1",paragraph:!0},"Sebagai wujud penghargaan kami terhadap partisipasi Anda, kami akan memberikan imbalan untuk setiap laporan celah keamanan yang dinyatakan valid. Nilai imbalan yang diberikan bervariasi, tergantung pada tingkat risiko dari celah keamanan yang dilaporkan. Ingat, keputusan pemberian imbalan bersifat mutlak."),r.a.createElement(d.a,{variant:"h5",gutterBottom:!0},"Perhatikan sebelum melaporkan!"),r.a.createElement(d.a,{variant:"body1",paragraph:!0},"Sebelum melakukan percobaan riset keamanan pada Bukalapak, mohon baca dan pahami beberapa informasi dan peraturan berikut:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Pemeriksaan celah keamanan hanya ",r.a.createElement("b",null,"menggunakan akun sendiri"),"."),r.a.createElement("li",null,"Usaha pemeriksaan tersebut ",r.a.createElement("b",null,"tidak boleh membahayakan")," pengguna lain atau sistem yang ada di Bukalapak."),r.a.createElement("li",null,"Anda ",r.a.createElement("b",null,"tidak boleh mempublikasikan")," temuan celah keamanan kepada khalayak umum tanpa seizin kami."),r.a.createElement("li",null,"Anda ",r.a.createElement("b",null,"hanya boleh mempublikasikan")," temuan celah keamanan yang dianggap valid, bukan merupakan duplikat, dan telah melalui proses verifikasi dari kami."),r.a.createElement("li",null,"Anda ",r.a.createElement("b",null,"tidak boleh memanfaatkan")," celah keamanan yang ditemukan untuk kepentingan pribadi atau kelompok tertentu."),r.a.createElement("li",null,"Bukalapak tidak akan memberikan sanksi atau tindakan hukum kepada periset keamanan selama mematuhi peraturan program BukaBounty."),r.a.createElement("li",null,"Bukalapak ",r.a.createElement("b",null,"akan memberikan sanksi dan/atau langkah hukum")," terhadap mereka yang tidak mengikuti peraturan berdasarkan hukum yang berlaku, meliputi tapi tidak terbatas pada ",r.a.createElement(c.a,{color:"primary",target:"_blank",rel:"noopener noreferrer",href:"https://www.anri.go.id/assets/download/97UU-Nomor-11-Tahun-2008-Tentang-Informasi-dan-Transaksi-Elektronik.pdf"},"Undang-Undang Republik Indonesia No. 11 Tahun 2008")," tentang Informasi dan Transaksi Elektronik atau hukum lokal lainnya di bidang informasi dan transaksi elektronik.")),r.a.createElement(d.a,{variant:"body1",paragraph:!0},"Dengan mengikuti program ini, Anda telah mengetahui segala informasi di atas dan setuju untuk terikat pada aturan-aturan yang telah disebutkan."),r.a.createElement(d.a,{variant:"h5",gutterBottom:!0},"Langkah pelaporan"),r.a.createElement(y.a,{activeStep:n,orientation:"vertical"},v.map(function(e,t){return r.a.createElement(E.a,{key:"report-steps-"+t},r.a.createElement(f.a,null,e.label),r.a.createElement(S.a,null,r.a.createElement("div",null,e.content),r.a.createElement("div",{className:a.stepperActions},r.a.createElement(h.a,{disabled:0===n,onClick:l,className:a.stepperButton},"Kembali"),r.a.createElement(h.a,{variant:"contained",color:"primary",onClick:i,className:a.stepperButton},n>=v.length-1?"Selesai":"Lanjut"))))})),n===v.length&&r.a.createElement(p.a,{square:!0,elevation:0,className:a.stepperActionsReset},r.a.createElement(d.a,null,"Jika dinyatakan valid, selamat! Tunggu email selanjutnya dari kami untuk pemberian imbalan."),r.a.createElement(h.a,{onClick:function(){t(0)},className:a.stepperButton},"Ulang")),r.a.createElement(d.a,{variant:"h5",gutterBottom:!0},"Contoh laporan yang baik"),r.a.createElement("img",{className:a.image,src:"sample_report.png",alt:"Contoh laporan"}))},null)},{label:"Cakupan",component:r.a.createElement(function(){var a=J(),e=r.a.useState(0),n=e[0],t=e[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{variant:"h5",gutterBottom:!0},"Domain"),r.a.createElement(d.a,{variant:"body1",paragraph:!0},"Semua konten yang berada pada domain berikut:"),r.a.createElement(p.a,{className:a.paper},r.a.createElement(w.a,null,L.map(function(a,e){return r.a.createElement(C.a,{key:"domains-"+e,dense:!0},a.icon&&r.a.createElement(P.a,null,a.icon),r.a.createElement(A.a,{primary:a.domain,secondary:a.description}))}))),r.a.createElement(d.a,{variant:"h5",gutterBottom:!0},"Jenis celah keamanan"),r.a.createElement(d.a,{variant:"body1",paragraph:!0},"Kami akan memeriksa semua laporan yang masuk. Akan tetapi, tidak semua laporan celah keamanan akan kami proses dan memperoleh imbalan karena tergantung pada risiko yang ditimbulkan."),r.a.createElement(k.a,{value:n,onChange:function(a,e){t(e)},indicatorColor:"secondary",textColor:"secondary"},r.a.createElement(g.a,{label:"Akan Diproses"}),r.a.createElement(g.a,{label:"Tidak Diproses"})),r.a.createElement(p.a,{className:a.paper},r.a.createElement(w.a,null,(0===n?I:M).map(function(a,e){return r.a.createElement(C.a,{key:"vulnerabilities-"+n+"-"+e,dense:!0},r.a.createElement(A.a,{primary:a.name,secondary:a.description?a.description:null}))}))))},null)},{label:"Wall of Fame",component:r.a.createElement(function(){var a,e,n,t=oa(),i=r.a.useState("asc"),l=i[0],m=i[1],o=r.a.useState("rank"),u=o[0],s=o[1],k=r.a.useState(0),g=k[0],b=k[1],h=r.a.useState(10),y=h[0],E=h[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{variant:"body1",paragraph:!0},"Berikut adalah periset yang telah berpartisipasi dalam program BukaBounty dan melaporkan celah keamanan yang valid. Terima kasih telah bersama-sama membuat Bukalapak menjadi lebih baik!"),r.a.createElement("div",{className:t.root},r.a.createElement(p.a,{className:t.paper},r.a.createElement("div",{className:t.tableWrapper},r.a.createElement(K.a,{className:t.table},r.a.createElement(Q,{headers:aa,order:l,orderBy:u,onRequestSort:function(a,e){m(u===e&&"desc"===l?"asc":"desc"),s(e)}}),r.a.createElement(O.a,null,(a=ma,e=$(l,u),n=a.map(function(a,e){return[a,e]}),n.sort(function(a,n){var t=e(a[0],n[0]);return 0!==t?t:a[1]-n[1]}),n.map(function(a){return a[0]})).slice(g*y,g*y+y).map(function(a,e){return r.a.createElement(q.a,{tabIndex:-1,key:"wall-of-fame-"+e},r.a.createElement(W.a,null,a.rank),r.a.createElement(W.a,null,a.profile?r.a.createElement(c.a,{color:"primary",target:"_blank",rel:"noopener noreferrer",href:a.profile},a.name):a.name),r.a.createElement(W.a,{align:"right"},a.bounties.emergency),r.a.createElement(W.a,{align:"right"},a.bounties.critical),r.a.createElement(W.a,{align:"right"},a.bounties.high),r.a.createElement(W.a,{align:"right"},a.bounties.medium),r.a.createElement(W.a,{align:"right"},a.points))})))),r.a.createElement(U.a,{rowsPerPageOptions:[5,10,25],component:"div",count:ma.length,rowsPerPage:y,page:g,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:function(a,e){b(e)},onChangeRowsPerPage:function(a){E(+a.target.value)}}))))},null)},{label:"Pembaruan",component:r.a.createElement(function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{variant:"body1",paragraph:!0},"Setiap perubahan pada program bug bounty akan dicatat di sini."),x.map(function(a){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{variant:"h5",gutterBottom:!0},a.date),r.a.createElement("ul",null,a.changes.map(function(a){return r.a.createElement("li",null,a)})))}))},null)}],sa=Object(m.a)(function(a){return{paper:{flexGrow:1},component:{padding:a.spacing(2)},footer:{padding:a.spacing(2)}}});function ca(){var a=t.data,e=sa(),n=r.a.useState(0),i=n[0],m=n[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.Helmet,null,r.a.createElement("title",null,a.site.siteMetadata.title),r.a.createElement("link",{rel:"icon",type:"image/ico",href:"favicon.ico"})),r.a.createElement(o.a,{position:"static"},r.a.createElement(s.a,{maxWidth:"md"},r.a.createElement(b.a,null,r.a.createElement(d.a,{variant:"h5",noWrap:!0},"BukaBounty")))),r.a.createElement(s.a,{maxWidth:"md"},r.a.createElement(u.a,{my:4},r.a.createElement(p.a,{className:e.paper},r.a.createElement(k.a,{variant:"scrollable",value:i,onChange:function(a,e){m(e)},indicatorColor:"primary",textColor:"primary"},ua.map(function(a,e){return r.a.createElement(g.a,{key:"main-tab-"+e,label:a.label})})),r.a.createElement(d.a,{component:"div",className:e.component},ua[i].component)))),r.a.createElement("footer",{className:e.footer},r.a.createElement(u.a,{color:"text.secondary",textAlign:"center"},r.a.createElement(d.a,{variant:"body2"},"©"," 2019 ",r.a.createElement(c.a,{href:"https://www.bukalapak.com",target:"_blank",rel:"noopener noreferrer"},"Bukalapak")," </> Red Team"))))}},283:function(a){a.exports={data:{site:{siteMetadata:{title:"BukaBounty | Bukalapak Bug Bounty Program"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-9bff5db018c16f833744.js.map