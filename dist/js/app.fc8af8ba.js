(function(){var e={3200:function(e,a,t){"use strict";var n=t(5130),i=t(6768);const o={id:"app"},r=(0,i.Lk)("main",null,null,-1);function s(e,a,t,n,s,c){const l=(0,i.g2)("PageHeader"),d=(0,i.g2)("router-view"),u=(0,i.g2)("PageFooter");return(0,i.uX)(),(0,i.CE)("div",o,[(0,i.bF)(l),(0,i.bF)(d),r,(0,i.bF)(u)])}var c=t(4232),l=t(3533),d=t(4520);const u=e=>((0,i.Qi)("data-v-8a95efb6"),e=e(),(0,i.jt)(),e),p={class:"container"},g=u((()=>(0,i.Lk)("div",{class:"logo"},[(0,i.Lk)("img",{src:l,alt:"Sustain Hydro Logo"})],-1))),v={class:"nav-search-container"},h={class:"navigation"},m=u((()=>(0,i.Lk)("span",null,null,-1))),f=u((()=>(0,i.Lk)("span",null,null,-1))),y=u((()=>(0,i.Lk)("span",null,null,-1))),b=[m,f,y],k={class:"dropdown"},w={class:"dropdown-menu"},C={class:"search-container"},x=u((()=>(0,i.Lk)("img",{src:d,alt:"search",class:"search-icon"},null,-1))),S=[x],L={key:0,class:"search-bar"};function F(e,a,t,o,r,s){const l=(0,i.g2)("router-link");return(0,i.uX)(),(0,i.CE)("header",{class:(0,c.C4)([{scrolled:r.isScrolled},"header"])},[(0,i.Lk)("div",p,[g,(0,i.Lk)("div",v,[(0,i.Lk)("nav",h,[(0,i.Lk)("button",{class:"menu-button",onClick:a[0]||(a[0]=(...e)=>s.toggleMenu&&s.toggleMenu(...e))},b),(0,i.Lk)("ul",{class:(0,c.C4)({open:r.isMenuOpen})},[(0,i.Lk)("li",null,[(0,i.bF)(l,{to:"/",onClick:s.closeMenu},{default:(0,i.k6)((()=>[(0,i.eW)("Home")])),_:1},8,["onClick"])]),(0,i.Lk)("li",null,[(0,i.bF)(l,{to:"/technology",onClick:s.closeMenu},{default:(0,i.k6)((()=>[(0,i.eW)("Technology")])),_:1},8,["onClick"])]),(0,i.Lk)("li",null,[(0,i.bF)(l,{to:"/news",onClick:s.closeMenu},{default:(0,i.k6)((()=>[(0,i.eW)("News")])),_:1},8,["onClick"])]),(0,i.Lk)("li",k,[(0,i.bF)(l,{to:"/about-us/company",onClick:s.closeMenu},{default:(0,i.k6)((()=>[(0,i.eW)("About Us")])),_:1},8,["onClick"]),(0,i.Lk)("ul",w,[(0,i.Lk)("li",null,[(0,i.bF)(l,{to:"/about-us/company",onClick:s.closeMenu},{default:(0,i.k6)((()=>[(0,i.eW)("Company")])),_:1},8,["onClick"])]),(0,i.Lk)("li",null,[(0,i.bF)(l,{to:"/about-us/leadership",onClick:s.closeMenu},{default:(0,i.k6)((()=>[(0,i.eW)("Leadership")])),_:1},8,["onClick"])])])]),(0,i.Lk)("li",null,[(0,i.bF)(l,{to:"/contact-us",onClick:s.closeMenu},{default:(0,i.k6)((()=>[(0,i.eW)("Contact Us")])),_:1},8,["onClick"])])],2)]),(0,i.Lk)("div",C,[(0,i.Lk)("button",{class:"search-button",onClick:a[1]||(a[1]=(...e)=>s.toggleSearchBar&&s.toggleSearchBar(...e))},S),r.isSearchBarVisible?((0,i.uX)(),(0,i.CE)("div",L,[(0,i.bo)((0,i.Lk)("input",{type:"text","onUpdate:modelValue":a[2]||(a[2]=e=>r.searchQuery=e),onKeyup:a[3]||(a[3]=(0,n.jR)(((...e)=>s.search&&s.search(...e)),["enter"])),placeholder:"Search..."},null,544),[[n.Jo,r.searchQuery]]),(0,i.Lk)("button",{onClick:a[4]||(a[4]=(...e)=>s.search&&s.search(...e))},"Search")])):(0,i.Q3)("",!0)])])])],2)}t(4114);var O={name:"PageHeader",data(){return{isMenuOpen:!1,isScrolled:!1,isSearchBarVisible:!1,searchQuery:""}},methods:{toggleMenu(){this.isMenuOpen=!this.isMenuOpen},closeMenu(){this.isMenuOpen=!1},handleScroll(){this.isScrolled=window.scrollY>50},toggleSearchBar(){this.isSearchBarVisible=!this.isSearchBarVisible},search(){this.searchQuery.trim()&&(this.$router.push({path:"/search",query:{q:this.searchQuery}}),this.isSearchBarVisible=!1)}},mounted(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy(){window.removeEventListener("scroll",this.handleScroll)}},_=t(1241);const A=(0,_.A)(O,[["render",F],["__scopeId","data-v-8a95efb6"]]);var E=A,T=t(2098);const I={class:"footer"},P=(0,i.Fv)('<div class="footer-content" data-v-36c0c2c6><div class="left-section" data-v-36c0c2c6><div class="contact-info" data-v-36c0c2c6><h3 data-v-36c0c2c6>Serenity Power</h3><p data-v-36c0c2c6>55 St. George St.<br data-v-36c0c2c6>Unit 620 <br data-v-36c0c2c6>Toronto, ON<br data-v-36c0c2c6>M5S 0C9</p><a href="mailto:contact@serenitypower.ca" style="color:aqua;" data-v-36c0c2c6>contact@serenitypower.ca</a></div><div class="social-media" data-v-36c0c2c6><h3 data-v-36c0c2c6>Follow us</h3><p data-v-36c0c2c6>Stay updated with our latest news and developments by following us on LinkedIn. </p><div class="social-icons" data-v-36c0c2c6><a href="#" data-v-36c0c2c6><img src="'+T+'" alt="linkedin" class="icon" data-v-36c0c2c6></a></div></div></div><div class="right-section" data-v-36c0c2c6><img src="'+l+'" alt="hystar logo" class="logo" data-v-36c0c2c6><a href="#" class="privacy-policy" data-v-36c0c2c6>privacy policy</a></div></div><div class="footer-bottom" data-v-36c0c2c6><p data-v-36c0c2c6>© 2023 All rights reserved.</p></div>',2),M=[P];function j(e,a,t,n,o,r){return(0,i.uX)(),(0,i.CE)("footer",I,M)}var B={name:"FooterComponent"};const z=(0,_.A)(B,[["render",j],["__scopeId","data-v-36c0c2c6"]]);var D=z,N={name:"App",components:{PageHeader:E,PageFooter:D}};const U=(0,_.A)(N,[["render",s]]);var q=U,V=t(1387),Y=t(9540),W=t(8998);const H={class:"homepage"},X=(0,i.Fv)('<div class="background-container" data-v-0dc1ef00><img src="'+Y+'" alt="Background" class="background-image" data-v-0dc1ef00><div class="content-overlay" style="white-space:nowrap;" data-v-0dc1ef00><h1 style="color:white;font-size:4rem;font-family:&#39;League Spartan&#39;, sans-serif;" data-v-0dc1ef00>DRIVING CLEAN</h1><h1 style="color:white;font-size:4rem;font-family:&#39;League Spartan&#39;, sans-serif;" data-v-0dc1ef00>ENERGY SOLUTIONS </h1><p style="color:white;font-size:3rem;font-family:&#39;Canva Sans&#39;;" data-v-0dc1ef00> with Advanced Solid Oxide Fuel Cells</p></div></div><div class="text-section" data-v-0dc1ef00><h2 data-v-0dc1ef00>Welcome to Serenity Power</h2><p data-v-0dc1ef00>At Serenity Power, we are redefining the future of heavy-duty transportation with our groundbreaking Solid Oxide Fuel Cell (SOFC) technology. Our advanced SOFCs are designed to deliver superior efficiency, durability, and fuel flexibility, making them the ideal power solution for heavy-duty transportation. Join us in our mission to create a cleaner, greener world.</p></div><div class="text-section" data-v-0dc1ef00><h2 data-v-0dc1ef00>Our Mission</h2><p data-v-0dc1ef00>To revolutionize heavy-duty transportation with innovative SOFC technology, reducing emissions and promoting sustainable energy solutions globally.</p></div><div class="video-container" data-v-0dc1ef00><video class="fullscreen-video" autoplay muted loop data-v-0dc1ef00><source src="'+W+'" type="video/mp4" data-v-0dc1ef00> Your browser does not support the video tag. </video></div><main class="main-content" data-v-0dc1ef00></main>',5),$=[X];function R(e,a,t,n,o,r){return(0,i.uX)(),(0,i.CE)("div",H,$)}var J={name:"HomePage"};const Q=(0,_.A)(J,[["render",R],["__scopeId","data-v-0dc1ef00"]]);var G=Q,K=t(7521),Z=t(1214),ee=t(4839),ae=t(574),te=t(1451),ne=t(160),ie=t(6409),oe=t(9065),re=t(3347),se=t(9310),ce=t(2139),le=t(3873);const de={class:"technologyPage"},ue=(0,i.Fv)('<div class="content-container" data-v-77711a6a><div class="video-container" data-v-77711a6a><video class="technology-video" autoplay muted loop data-v-77711a6a><source src="'+K+'" type="video/mp4" data-v-77711a6a> Your browser does not support the video tag. </video></div><div class="description-container" data-v-77711a6a><h2 data-v-77711a6a>Two technological advancements engineered for transportation</h2><p data-v-77711a6a>Our patented SOFC technology is fuel flexible and eliminates the need for fuel processing equipment and a continuous pure water supply that is akin to traditional SOFC technology. This means our stacks are more compact and lighter enabling its use onboard a truck. Our cell configuration and materials also enable rapid start-up times and operation meaning that the truck stack or engine can be turned on and off very quickly.</p></div></div><div class="content-container" data-v-77711a6a><div class="description-container" data-v-77711a6a><h2 data-v-77711a6a>SOFCs Reimagined Onboard a Truck</h2><p data-v-77711a6a>The fuel cell system encompasses the stack/engine, the fuel tanks and an electric motor. As our fuel cells are fuel flexible, natural gas, green methane or hydrogen can be used to refill the tanks and fuel the stack. The stack feeds oxygen (from air) and fuel to generate electricity to the electric motor which propels the vehicle forward. </p></div><div class="video-container" data-v-77711a6a><video class="technology-video" autoplay muted loop data-v-77711a6a><source src="'+Z+'" type="video/mp4" data-v-77711a6a> Your browser does not support the video tag. </video></div></div><div class="content-container" data-v-77711a6a><div class="description-container" data-v-77711a6a><h2 data-v-77711a6a>Driving the Future of Transportation</h2><p data-v-77711a6a> The fuel cell system encompasses the stack/engine, the fuel tanks and an electric motor. As our fuel cells are fuel flexible, natural gas, green methane or hydrogen can be used to refill the tanks and fuel the stack. The stack feeds oxygen (from air) and fuel which react and generate electricity. The electricity flows to the electric motor which moves the vehicle forward. </p></div><div class="video-container" data-v-77711a6a><img src="'+ee+'" alt="truck" class="technology-video" data-v-77711a6a></div></div><h2 data-v-77711a6a>How Are We Different?</h2><p data-v-77711a6a>Our advanced SOFCs represent a significant leap forward compared to conventional technologies.</p><img src="'+ae+'" alt="truck" class="description-image" data-v-77711a6a><h2 data-v-77711a6a>Our Innovations That Set Us Apart:</h2>',7),pe={class:"content-grid"},ge={class:"item-text"},ve={class:"item-image"},he=["src","alt"],me=(0,i.Fv)('<h2 data-v-77711a6a>Benefits of Serenity Power Technology</h2><div class="content-container" data-v-77711a6a><div class="description-container" data-v-77711a6a><div class="text-section" data-v-77711a6a><div class="text-block" data-v-77711a6a><img src="'+te+'" alt="truck" class="icon-img" data-v-77711a6a><h3 data-v-77711a6a>Quiet Performance </h3><p data-v-77711a6a>Experience a peaceful ride with our noise-free operation, eliminating cabin noise for a more comfortable driving experience. </p></div><div class="text-block" data-v-77711a6a><img src="'+ne+'" alt="truck" class="icon-img" data-v-77711a6a><h3 data-v-77711a6a>Sustainable Power</h3><p data-v-77711a6a>Achieve zero emissions when paired with the right fuel source, contributing to a cleaner, greener future. </p></div><div class="text-block" data-v-77711a6a><img src="'+ie+'" alt="truck" class="icon-img" data-v-77711a6a><h3 data-v-77711a6a>Customizable Solutions </h3><p data-v-77711a6a>Adaptable power systems designed to meet your specific energy needs, ensuring optimal performance for your application. </p></div></div></div><div class="video-container" data-v-77711a6a><img src="'+oe+'" alt="truck" class="process-img" data-v-77711a6a></div></div><div class="background-container" data-v-77711a6a><img src="'+re+'" alt="Background" class="background-image" data-v-77711a6a><div class="content-overlay" data-v-77711a6a><h1 style="color:white;" data-v-77711a6a>Future Applications</h1></div></div><div class="text-section" data-v-77711a6a><p data-v-77711a6a>Solid Oxide Fuel Cells (SOFCs) are a versatile and powerful technology capable of transforming numerous high-emission industries. At Serenity Power, while we are initially focusing on revolutionizing the heavy-duty transportation sector, our vision extends far beyond. We are committed to leveraging our advanced technology to drive sustainable change across various sectors: </p></div><div class="text-section" data-v-77711a6a><h2 data-v-77711a6a>Energy Storage</h2><p data-v-77711a6a>Our advanced SOFCs can operate as Solid Oxide Electrolysis Cells (SOECs), seamlessly integrating into energy storage systems. This enables efficient storage of excess renewable energy for use during low generation periods, enhancing grid stability and reliability. </p></div><div class="background-container" data-v-77711a6a><img src="'+se+'" alt="truck" class="background-image" data-v-77711a6a><div class="content-overlay" data-v-77711a6a></div></div><div class="text-section" data-v-77711a6a><h2 data-v-77711a6a>Power Generation</h2><p data-v-77711a6a>Our SOFC technology provides a sustainable, high-efficiency alternative to fossil fuels. Ideal for residential, commercial, and industrial power generation, it reduces emissions and supports clean energy solutions for both off-grid and urban locations. </p></div><div class="background-container" data-v-77711a6a><img src="'+ce+'" alt="truck" class="background-image" data-v-77711a6a><div class="content-overlay" data-v-77711a6a></div></div><div class="text-section" data-v-77711a6a><h2 data-v-77711a6a>Syngas &amp; Hydrogen Production</h2><p data-v-77711a6a>Our SOECs efficiently produce hydrogen and syngas frcom various fuel sources, including natural gas, biogas, and green methane. This technology supports the hydrogen economy and fosters innovations in clean fuel production and energy storage. </p></div><div class="background-container" data-v-77711a6a><img src="'+le+'" alt="truck" class="background-image" data-v-77711a6a><div class="content-overlay" data-v-77711a6a><h2 style="color:white;" data-v-77711a6a>Be part of the clean transportation transition.</h2></div></div>',10);function fe(e,a,t,n,o,r){const s=(0,i.g2)("BackgroundComponent");return(0,i.uX)(),(0,i.CE)("div",de,[(0,i.bF)(s,{backgroundImage:"tech_bg.jpg",title:"TECHNOLOGY",text:"Learn about Serenity Power’s innovative Solid Oxide Fuel Cell technology. ",titleColor:"white",textColor:"white",titleSize:"3rem",textSize:"1.5rem"}),ue,(0,i.Lk)("div",pe,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(o.gridItems,((e,a)=>((0,i.uX)(),(0,i.CE)("div",{class:"grid-item",key:a},[(0,i.Lk)("div",ge,[(0,i.Lk)("h3",null,(0,c.v_)(e.title),1),(0,i.Lk)("p",null,(0,c.v_)(e.text),1)]),(0,i.Lk)("div",ve,[(0,i.Lk)("img",{src:e.image,alt:e.title},null,8,he)])])))),128))]),me])}const ye={class:"background-container"},be=["src"],ke={class:"content-overlay"};function we(e,a,t,n,o,r){return(0,i.uX)(),(0,i.CE)("div",ye,[(0,i.Lk)("img",{src:t.backgroundImage,alt:"Background",class:"background-image"},null,8,be),(0,i.Lk)("div",ke,[(0,i.Lk)("h1",{style:(0,c.Tr)({color:t.titleColor,fontSize:t.titleSize})},(0,c.v_)(t.title),5),(0,i.Lk)("p",{style:(0,c.Tr)({color:t.textColor,fontSize:t.textSize})},(0,c.v_)(t.text),5)])])}var Ce={name:"BackgroundComponent",props:{backgroundImage:{type:String,required:!0},title:{type:String,default:"Default Title"},text:{type:String,default:"Default Text"},titleColor:{type:String,default:"#FFFFFF"},textColor:{type:String,default:"#FFFFFF"},titleSize:{type:String,default:"4rem"},textSize:{type:String,default:"1.5rem"}}};const xe=(0,_.A)(Ce,[["render",we],["__scopeId","data-v-72613609"]]);var Se=xe,Le={name:"technologyView",components:{BackgroundComponent:Se},data(){return{gridItems:[{title:"Higher Efficiency:",text:"Our SOFCs convert more fuel into electricity with less waste heat, delivering lower operational costs and a reduced environmental footprint compared to low-temperature PEMFCs.",image:t(983)},{title:"Fuel Flexibility",text:"Compatible with hydrogen, natural gas, and green methane, our technology offers a versatile solution for transportation without relying solely on the hydrogen economy.",image:t(6762)},{title:"Rapid Start-Up",text:"Our SOFCs feature faster start-up and shut-down times, ideal for applications requiring frequent cycling, such as heavy-duty transportation.",image:t(7232)},{title:"Compact Design",text:"By eliminating fuel processing equipment, our SOFCs are more compact and lightweight, allowing seamless integration into vehicles without sacrificing power or efficiency. ",image:t(7672)}]}}},Fe=t(365),Oe=t.n(Fe);"function"===typeof Oe()&&Oe()(Le);const _e=(0,_.A)(Le,[["render",fe],["__scopeId","data-v-77711a6a"]]);var Ae=_e;const Ee=e=>((0,i.Qi)("data-v-cb2149c8"),e=e(),(0,i.jt)(),e),Te={class:"contact-page"},Ie=Ee((()=>(0,i.Lk)("h2",null,"Global Reach",-1))),Pe={class:"form-row"},Me={class:"form-group"},je=Ee((()=>(0,i.Lk)("label",null,"First Name",-1))),Be={class:"form-group"},ze=Ee((()=>(0,i.Lk)("label",null,"Last Name",-1))),De={class:"form-row"},Ne={class:"form-group"},Ue=Ee((()=>(0,i.Lk)("label",null,"Email",-1))),qe={class:"form-group"},Ve=Ee((()=>(0,i.Lk)("label",null,"Phone",-1))),Ye={class:"form-row"},We={class:"form-group"},He=Ee((()=>(0,i.Lk)("label",null,"Company",-1))),Xe={class:"form-group"},$e=Ee((()=>(0,i.Lk)("label",null,"Inquiry",-1))),Re={class:"form-row"},Je={class:"form-group"},Qe=Ee((()=>(0,i.Lk)("label",null,"Topic",-1))),Ge=(0,i.Fv)('<option value="general" data-v-cb2149c8>General</option><option value="hydrogen" data-v-cb2149c8>Hydrogen</option><option value="media" data-v-cb2149c8>Media</option><option value="supplier" data-v-cb2149c8>Supplier</option><option value="vehicle_sales" data-v-cb2149c8>Vehicle Sales</option>',5),Ke=[Ge],Ze={class:"form-group"},ea=Ee((()=>(0,i.Lk)("label",null,"Region",-1))),aa=Ee((()=>(0,i.Lk)("option",{value:"north_america"},"North America",-1))),ta=Ee((()=>(0,i.Lk)("option",{value:"europe"},"Europe",-1))),na=Ee((()=>(0,i.Lk)("option",{value:"australia"},"Australia",-1))),ia=[aa,ta,na],oa=Ee((()=>(0,i.Lk)("button",{type:"submit"},"Submit",-1)));function ra(e,a,t,o,r,s){const c=(0,i.g2)("BackgroundComponent");return(0,i.uX)(),(0,i.CE)("div",Te,[(0,i.bF)(c,{backgroundImage:"contact_bg.png",title:"CONTACT US",text:"Whether you have questions about our technology, want to explore partnership opportunities, or need support, our team is here to help!",titleColor:"white",textColor:"white",titleSize:"3rem",textSize:"1.5rem"}),(0,i.Lk)("form",{class:"global-reach-form",onSubmit:a[8]||(a[8]=(0,n.D$)(((...e)=>s.submitForm&&s.submitForm(...e)),["prevent"]))},[Ie,(0,i.Lk)("div",Pe,[(0,i.Lk)("div",Me,[je,(0,i.bo)((0,i.Lk)("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>r.globalForm.firstName=e),required:""},null,512),[[n.Jo,r.globalForm.firstName]])]),(0,i.Lk)("div",Be,[ze,(0,i.bo)((0,i.Lk)("input",{type:"text","onUpdate:modelValue":a[1]||(a[1]=e=>r.globalForm.lastName=e),required:""},null,512),[[n.Jo,r.globalForm.lastName]])])]),(0,i.Lk)("div",De,[(0,i.Lk)("div",Ne,[Ue,(0,i.bo)((0,i.Lk)("input",{type:"email","onUpdate:modelValue":a[2]||(a[2]=e=>r.globalForm.email=e),required:""},null,512),[[n.Jo,r.globalForm.email]])]),(0,i.Lk)("div",qe,[Ve,(0,i.bo)((0,i.Lk)("input",{type:"text","onUpdate:modelValue":a[3]||(a[3]=e=>r.globalForm.phone=e),required:""},null,512),[[n.Jo,r.globalForm.phone]])])]),(0,i.Lk)("div",Ye,[(0,i.Lk)("div",We,[He,(0,i.bo)((0,i.Lk)("input",{type:"text","onUpdate:modelValue":a[4]||(a[4]=e=>r.globalForm.company=e),required:""},null,512),[[n.Jo,r.globalForm.company]])]),(0,i.Lk)("div",Xe,[$e,(0,i.bo)((0,i.Lk)("textarea",{"onUpdate:modelValue":a[5]||(a[5]=e=>r.globalForm.inquiry=e),required:""},null,512),[[n.Jo,r.globalForm.inquiry]])])]),(0,i.Lk)("div",Re,[(0,i.Lk)("div",Je,[Qe,(0,i.bo)((0,i.Lk)("select",{"onUpdate:modelValue":a[6]||(a[6]=e=>r.globalForm.topic=e),required:""},Ke,512),[[n.u1,r.globalForm.topic]])]),(0,i.Lk)("div",Ze,[ea,(0,i.bo)((0,i.Lk)("select",{"onUpdate:modelValue":a[7]||(a[7]=e=>r.globalForm.region=e),required:""},ia,512),[[n.u1,r.globalForm.region]])])]),oa],32)])}var sa={name:"ContactUsView",components:{BackgroundComponent:Se},data(){return{globalForm:{firstName:"",lastName:"",email:"",phone:"",company:"",inquiry:"",topic:"",region:""}}},methods:{submitForm(){const{firstName:e,lastName:a,email:t,phone:n,company:i,inquiry:o,topic:r,region:s}=this.globalForm,c=`mailto:contact@serenitypower.ca?subject=Inquiry from ${e} ${a}&body=\n        First Name: ${e}%0D%0A\n        Last Name: ${a}%0D%0A\n        Email: ${t}%0D%0A\n        Phone: ${n}%0D%0A\n        Company: ${i}%0D%0A\n        Inquiry: ${o}%0D%0A\n        Topic: ${r}%0D%0A\n        Region: ${s}%0D%0A`;window.location.href=c}}};const ca=(0,_.A)(sa,[["render",ra],["__scopeId","data-v-cb2149c8"]]);var la=ca;const da={class:"page"};function ua(e,a,t,n,o,r){const s=(0,i.g2)("BackgroundComponent");return(0,i.uX)(),(0,i.CE)("div",da,[(0,i.bF)(s,{backgroundImage:"background.jpg",title:"NEWS IS COMING",text:"waiting",titleColor:"white",textColor:"white",titleSize:"3rem",textSize:"1rem"})])}var pa={name:"NewsView",components:{BackgroundComponent:Se},data(){return{cards:[{title:"Saving lives, one stem cell at a time",date:"July 12, 2024",image:t(732),link:"/news/saving-lives"},{title:"HyPilot on the move!",date:"April 22, 2024",image:t(732),link:"/news/hypilot"},{title:"A year in review - 2023",date:"December 24, 2023",image:t(732),link:"/news/year-in-review"}]}},methods:{goToPage(e){this.$router.push(e)}}};const ga=(0,_.A)(pa,[["render",ua],["__scopeId","data-v-6702fdf4"]]);var va=ga;const ha=e=>((0,i.Qi)("data-v-621cf77f"),e=e(),(0,i.jt)(),e),ma={class:"team-page"},fa=ha((()=>(0,i.Lk)("div",{class:"description-container"},[(0,i.Lk)("h2",null,"At Serenity Power, our leadership team brings together a wealth of experience and expertise in fuel cell technology, engineering, and sustainable energy solutions.")],-1))),ya={class:"team-container"},ba={class:"card-front"},ka=["src","onMouseover","onMouseleave"],wa=["href"],Ca={class:"card-back"};function xa(e,a,n,o,r,s){const l=(0,i.g2)("BackgroundComponent");return(0,i.uX)(),(0,i.CE)("div",ma,[(0,i.bF)(l,{backgroundImage:"../leadership_bg.png",title:"LEADERSHIP",text:"Get to know the people that are making the energy transition happen!",titleColor:"white",textColor:"white",titleSize:"3rem",textSize:"1.5rem"}),fa,(0,i.Lk)("div",ya,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(r.teamMembers,(e=>((0,i.uX)(),(0,i.CE)("div",{class:"team-card",key:e.id},[(0,i.Lk)("div",{class:(0,c.C4)(["card-inner",{"is-flipped":e.isFlipped}])},[(0,i.Lk)("div",ba,[(0,i.Lk)("img",{src:t(290)(`./${e.photo}`),alt:"Photo",class:"member-photo",onMouseover:a=>s.flipCard(e),onMouseleave:a=>s.unflipCard(e)},null,40,ka),(0,i.Lk)("h3",null,(0,c.v_)(e.name),1),(0,i.Lk)("p",null,(0,c.v_)(e.position),1),(0,i.Lk)("a",{href:e.linkedin,target:"_blank",class:"linkedin-link"},"LinkedIn",8,wa)]),(0,i.Lk)("div",Ca,[(0,i.Lk)("h3",null,(0,c.v_)(e.name),1),(0,i.Lk)("p",null,(0,c.v_)(e.bio),1)])],2)])))),128))])])}var Sa={name:"LeadershipView",components:{BackgroundComponent:Se},data(){return{teamMembers:[{id:1,name:"Aleisha R. Cerny",position:"Chief Executive Officer",photo:"Aleisha.jpg",linkedin:"https://www.linkedin.com/in/aleisha-reese-cerny/",bio:"A recent graduate with a Master’s degree in Materials Engineering from the University of Toronto, Aleisha has long been passionate about tangible solutions combating climate change. As a visionary leader with a strong background in engineering, clean energy technologies, and business, she is excited to lead Serenity Power in revolutionizing the heavy-duty transportation industry and driving the adoption of sustainable energy solutions.",isFlipped:!1},{id:2,name:"Yvonne Liu",position:"Chief Operating Officer",photo:"Yvonne Liu.jpg",linkedin:"https://www.linkedin.com/in/yvonne-liu-aa28b2158/",bio:"Yvonne earned a Master’s degree in Mechanical Engineering from the University of Toronto, gaining a strong understanding of sustainable energy through hands-on fuel cell research. She is eager to combine her technical expertise with strategic business management to drive Serenity Power’s mission of clean energy transition and foster a culture of innovation and excellence. ",isFlipped:!1},{id:3,name:"Dr. Olivera Kesler",position:"Chief Technology Officer",photo:"Olivera Kesler.jpg",linkedin:"https://www.linkedin.com/in/olivera-kesler-566797281/",bio:"Dr. Olivera Kesler is the CTO of Serenity Power, bringing over 25 years of expertise in Solid Oxide Fuel Cell technology. As a Professor at the University of Toronto and an MIT alumna, she leads our R&D efforts, ensuring our SOFCs remain at the cutting edge of innovation.",isFlipped:!1},{id:4,name:"Yifei Yan",position:"Director of Engineering",photo:"Yifei Yan.jpg",linkedin:"https://www.linkedin.com/in/yifei-yan-57b137134/",bio:"Yifei is a last year PhD student working at the University of Toronto under supervision of Dr. Kesler. The project focus on making high performance metal substrate for SOFC, which has been the performance bottleneck for SOFCs from the lab.",isFlipped:!1}]}},methods:{flipCard(e){e.isFlipped=!0},unflipCard(e){e.isFlipped=!1}}};const La=(0,_.A)(Sa,[["render",xa],["__scopeId","data-v-621cf77f"]]);var Fa=La,Oa=t(9073),_a=t(3647),Aa=t(5627),Ea=t(4949),Ta=t(9717);const Ia={class:"company-page"},Pa=(0,i.Fv)('<div class="text-section" data-v-0f48ad96><h2 data-v-0f48ad96>Our Story</h2><p data-v-0f48ad96>Founded in 2023, Serenity Power is at the forefront of clean energy innovation. We specialize in developing advanced Solid Oxide Fuel Cells (SOFCs) aimed to transform the heavy-duty transportation industry by providing innovative, efficient, and environmentally friendly power solutions. Our team of experts is dedicated to creating sustainable energy solutions that meet the growing demand for cleaner, more efficient power. </p></div><div class="text-section" data-v-0f48ad96><h2 data-v-0f48ad96>Our Vision</h2><p data-v-0f48ad96>To lead the global transition to sustainable energy in the transportation sector, reducing reliance on fossil fuels and minimizing environmental impact. </p></div><div class="values-section" data-v-0f48ad96><h2 data-v-0f48ad96>Our Core Values</h2><div class="values-cards" data-v-0f48ad96><div class="value-card" data-v-0f48ad96><img src="'+Oa+'" alt="Impact Icon" class="value-icon" data-v-0f48ad96><h3 data-v-0f48ad96>Innovation</h3><p data-v-0f48ad96>Continuously pushing the boundaries of SOFC technology to power the future. </p></div><div class="value-card" data-v-0f48ad96><img src="'+_a+'" alt="Drive Icon" class="value-icon" data-v-0f48ad96><h3 data-v-0f48ad96>Sustainability</h3><p data-v-0f48ad96> Committed to combating climate change through clean energy solutions. </p></div><div class="value-card" data-v-0f48ad96><img src="'+Aa+'" alt="Empathy Icon" class="value-icon" data-v-0f48ad96><h3 data-v-0f48ad96>Integrity</h3><p data-v-0f48ad96> Upholding transparency and the highest ethical standards in everything we do. </p></div><div class="value-card" data-v-0f48ad96><img src="'+Ea+'" alt="Agility Icon" class="value-icon" data-v-0f48ad96><h3 data-v-0f48ad96>Passion</h3><p data-v-0f48ad96>Driven by our mission to create a lasting, positive impact on people and the planet. </p></div></div></div><div class="text-section" data-v-0f48ad96><h2 data-v-0f48ad96>Why Choose Serenity Power?</h2><p data-v-0f48ad96>At Serenity Power, we’re committed to driving innovation and excellence in everything we do. Here’s why you should partner with us:</p><p data-v-0f48ad96><span class="highlight" data-v-0f48ad96>Expertise:</span> Our team comprises experts, researchers, and engineers dedicated to advancing SOFC technology.</p><p data-v-0f48ad96><span class="highlight" data-v-0f48ad96>Sustainability:</span> We prioritize sustainability in our product design, manufacturing processes, and business practices.</p><p data-v-0f48ad96><span class="highlight" data-v-0f48ad96>Customer Focus:</span> We will work closely with our clients to understand their needs and deliver customized solutions that exceed expectations.</p><p data-v-0f48ad96><span class="highlight" data-v-0f48ad96>Proven Technology:</span> Our SOFCs have been rigorously researched and tested to ensure they meet the highest standards of performance and reliability.</p></div><div class="background-container" data-v-0f48ad96><img src="'+Ta+'" alt="truck" class="background-image" data-v-0f48ad96><div class="content-overlay" data-v-0f48ad96><h2 style="color:white;" data-v-0f48ad96>LET&#39;S BUILD A BETTER PLANET</h2><p data-v-0f48ad96>Join us in revolutionizing heavy-duty transportation with advanced SOFC technology. Together, we can drive a sustainable future and make a lasting impact on the planet.</p></div></div>',5);function Ma(e,a,t,n,o,r){const s=(0,i.g2)("BackgroundComponent");return(0,i.uX)(),(0,i.CE)("div",Ia,[(0,i.bF)(s,{backgroundImage:"../company_bg.png",title:"ABOUT OUR COMPANY",text:"We are a clean tech company dedicated to next-gen SOFC technology.",titleColor:"white",textColor:"white",titleSize:"3rem",textSize:"1.5rem"}),Pa])}var ja={name:"CompanyView",components:{BackgroundComponent:Se}};const Ba=(0,_.A)(ja,[["render",Ma],["__scopeId","data-v-0f48ad96"]]);var za=Ba;const Da=[{path:"/",name:"Home",component:G},{path:"/technology",name:"Technology",component:Ae},{path:"/news",name:"News",component:va},{path:"/about-us/company",name:"Company",component:za},{path:"/about-us/leadership",name:"AboutUs",component:Fa},{path:"/contact-us",name:"ContactUs",component:la},{path:"/:pathMatch(.*)*",redirect:"/"}],Na=(0,V.aE)({history:(0,V.LA)("/sustain-hydro/"),routes:Da});var Ua=Na;(0,n.Ef)(q).use(Ua).mount("#app")},365:function(){},290:function(e,a,t){var n={"./1.png":1451,"./2.png":160,"./3.png":6409,"./Aleisha.jpg":3551,"./Blue.png":5576,"./Innovation.png":9073,"./Learn More.png":129,"./Olivera Kesler.jpg":9630,"./Serenity Power Promo Video.mp4":8998,"./White.png":3533,"./Yifei Yan.jpg":592,"./Yvonne Liu.jpg":5551,"./background.jpg":732,"./compact design icon.png":7672,"./company_end.png":9717,"./email-icon.png":2798,"./energy storage img.png":5974,"./fuel flexibility icon.png":6762,"./future_applications_img.png":3347,"./higher efficiency icon.png":983,"./homepage_bg.png":9540,"./how_different_img.png":574,"./integrity.png":5627,"./linkedin.png":2098,"./passion.png":4949,"./power generation img.png":9310,"./rapid startup icon.png":7232,"./search-icon.png":4520,"./sustainability.png":3647,"./syngas img.png":2139,"./tech-display.jpg":9065,"./tech01.mp4":7521,"./tech02.mp4":1214,"./technology end.jpg":3873,"./truck.png":4839};function i(e){var a=o(e);return t(a)}function o(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=o,e.exports=i,i.id=290},1451:function(e,a,t){"use strict";e.exports=t.p+"img/1.c007cbaf.png"},160:function(e,a,t){"use strict";e.exports=t.p+"img/2.84468721.png"},6409:function(e,a,t){"use strict";e.exports=t.p+"img/3.d4423fc1.png"},3551:function(e,a,t){"use strict";e.exports=t.p+"img/Aleisha.2fe7405d.jpg"},5576:function(e,a,t){"use strict";e.exports=t.p+"img/Blue.cd92ce52.png"},9073:function(e,a,t){"use strict";e.exports=t.p+"img/Innovation.b763b077.png"},129:function(e,a,t){"use strict";e.exports=t.p+"img/Learn More.d6a837b3.png"},9630:function(e,a,t){"use strict";e.exports=t.p+"img/Olivera Kesler.d8514128.jpg"},8998:function(e,a,t){"use strict";e.exports=t.p+"media/Serenity Power Promo Video.417d2938.mp4"},3533:function(e,a,t){"use strict";e.exports=t.p+"img/White.4f4834d8.png"},592:function(e,a,t){"use strict";e.exports=t.p+"img/Yifei Yan.36a0d22b.jpg"},5551:function(e,a,t){"use strict";e.exports=t.p+"img/Yvonne Liu.ad4a5b62.jpg"},732:function(e,a,t){"use strict";e.exports=t.p+"img/background.d81f8697.jpg"},7672:function(e,a,t){"use strict";e.exports=t.p+"img/compact design icon.5de2c911.png"},9717:function(e,a,t){"use strict";e.exports=t.p+"img/company_end.e9708886.png"},2798:function(e,a,t){"use strict";e.exports=t.p+"img/email-icon.561124fa.png"},5974:function(e,a,t){"use strict";e.exports=t.p+"img/energy storage img.cc88425d.png"},6762:function(e,a,t){"use strict";e.exports=t.p+"img/fuel flexibility icon.517d2e5e.png"},3347:function(e,a,t){"use strict";e.exports=t.p+"img/future_applications_img.c15956db.png"},983:function(e,a,t){"use strict";e.exports=t.p+"img/higher efficiency icon.7a2928f9.png"},9540:function(e,a,t){"use strict";e.exports=t.p+"img/homepage_bg.046cf01b.png"},574:function(e,a,t){"use strict";e.exports=t.p+"img/how_different_img.bf497cd0.png"},5627:function(e,a,t){"use strict";e.exports=t.p+"img/integrity.a60db0ba.png"},2098:function(e,a,t){"use strict";e.exports=t.p+"img/linkedin.29af53bd.png"},4949:function(e,a,t){"use strict";e.exports=t.p+"img/passion.27cdee28.png"},9310:function(e,a,t){"use strict";e.exports=t.p+"img/power generation img.91fd9ad6.png"},7232:function(e,a,t){"use strict";e.exports=t.p+"img/rapid startup icon.dab2ba93.png"},4520:function(e,a,t){"use strict";e.exports=t.p+"img/search-icon.c13a7a48.png"},3647:function(e,a,t){"use strict";e.exports=t.p+"img/sustainability.8966bd44.png"},2139:function(e,a,t){"use strict";e.exports=t.p+"img/syngas img.eb107420.png"},9065:function(e,a,t){"use strict";e.exports=t.p+"img/tech-display.f5ca5eee.jpg"},7521:function(e,a,t){"use strict";e.exports=t.p+"media/tech01.120254a5.mp4"},1214:function(e,a,t){"use strict";e.exports=t.p+"media/tech02.b479a2b7.mp4"},3873:function(e,a,t){"use strict";e.exports=t.p+"img/technology end.85c1e385.jpg"},4839:function(e,a,t){"use strict";e.exports=t.p+"img/truck.746c4ab6.png"}},a={};function t(n){var i=a[n];if(void 0!==i)return i.exports;var o=a[n]={exports:{}};return e[n].call(o.exports,o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(a,n,i,o){if(!n){var r=1/0;for(d=0;d<e.length;d++){n=e[d][0],i=e[d][1],o=e[d][2];for(var s=!0,c=0;c<n.length;c++)(!1&o||r>=o)&&Object.keys(t.O).every((function(e){return t.O[e](n[c])}))?n.splice(c--,1):(s=!1,o<r&&(r=o));if(s){e.splice(d--,1);var l=i();void 0!==l&&(a=l)}}return a}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,i,o]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.p="/sustain-hydro/"}(),function(){var e={524:0};t.O.j=function(a){return 0===e[a]};var a=function(a,n){var i,o,r=n[0],s=n[1],c=n[2],l=0;if(r.some((function(a){return 0!==e[a]}))){for(i in s)t.o(s,i)&&(t.m[i]=s[i]);if(c)var d=c(t)}for(a&&a(n);l<r.length;l++)o=r[l],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(d)},n=self["webpackChunkwebpage"]=self["webpackChunkwebpage"]||[];n.forEach(a.bind(null,0)),n.push=a.bind(null,n.push.bind(n))}();var n=t.O(void 0,[504],(function(){return t(3200)}));n=t.O(n)})();
//# sourceMappingURL=app.fc8af8ba.js.map