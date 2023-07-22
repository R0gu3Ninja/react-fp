import React from 'react'
import '../css/homepage.css'
import $ from 'jquery'

function filterFunction() {
    try {
        var filter, ul, li, span, i;
        var input = document.getElementById("myLocInput");
        filter = input.value.toUpperCase();
        var div = document.getElementById("myDropdown");
        span = div.getElementsByTagName("span");
        for (i = 0; i < span.length; i++) {
            var txtValue = span[i].textContent || span[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                span[i].style.display = "";
            } else {
                span[i].style.display = "none";
            }
        }
    } catch (e) {
        console.log("Failure at Presize of Slider:" + e)
    }
}


function getCityId() {
    try {
        var input = $("#myLocInput").val();
        $.ajax({
            type: 'POST',
            url: 'https://www.lastjourney.in/pagecreator/getId/',
            data: 'city_name=' + input,
            success: function (data) {
                // alert('https://www.lastjourney.in/delhi-ncr');
                // window.location.reload();
                window.location.href = 'https://www.lastjourney.in/';
            },
            error: function (jqXHR, textStatus, errorThrown) {
                // window.location.reload();
            },
        })
    } catch (e) {
        console.log("Failure at Presize of Slider:" + e)
    }
}

const Header = () => {
    return (
        <div class="header">
            <div class="header-green">
                <a href="https://www.lastjourney.in/lp/" title="Lastjourney.in"><img src="https://www.lastjourney.in/lp/assets/designer/themes/default/images/header-logo.webp" title="Lastjourney.in" alt="Lastjourney.in" /></a>
                <ul>
                    <li><a href="https://www.lastjourney.in/lp/">Home</a></li>
                    <li><a href="https://www.lastjourney.in/about-us/?random=ICs5MSA5NzExMzAwNDcx">About Us</a>
                        <ul class="menu">
                            <li> <a href="https://www.lastjourney.in/blog/?random=ICs5MSA5NzExMzAwNDcx">Blog </a> </li>
                        </ul></li>
                    <form class="header-form-search" action="https://www.flipkart.com/search" method="GET">
                        <div width="20" height="20">
                            <input type="text" title="Search for products, brands and more" name="q" autocomplete="off" placeholder="Search for products, brands and more" value="" />
                        </div>
                        <input type="hidden" name="otracker" value="search" />
                        <input type="hidden" name="otracker1" value="search" />
                        <input type="hidden" name="marketplace" value="FLIPKART" /><input type="hidden" name="as-show" value="off" />
                        <input type="hidden" name="as" value="off" />

                        <button type="submit"><svg width="20" height="20" viewBox="0 0 17 18" class=""
                            xmlns="http://www.w3.org/2000/svg">
                            <g fill="#2874F1" fill-rule="evenodd">
                                <path
                                    d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203">
                                </path>
                                <path
                                    d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467">
                                </path>
                            </g>
                        </svg></button>
                    </form>
                    <li class="menuservice">Services
                        <ul class="menu">
                            <li><a href="https://www.lastjourney.in/delhi-ncr/funeral-services?random=ICs5MSA5NzExMzAwNDcx" title="Funeral Services">Funeral Services</a>
                                <ul class="submenu">
                                    <li><a href="https://www.lastjourney.in/delhi-ncr/funeral-arrangement?random=ICs5MSA5NzExMzAwNDcx" title="Funeral Arrangement">Funeral Arrangement</a></li>
                                    <li><a href="https://www.lastjourney.in/delhi-ncr/cremation-services?random=ICs5MSA5NzExMzAwNDcx" title="Cremation Services">Cremation Services</a></li>
                                    <li><a href="https://www.lastjourney.in/delhi-ncr/freezer-box?random=ICs5MSA5NzExMzAwNDcx" title="Freezer Box">Freezer Box</a></li>
                                    <li><a href="https://www.lastjourney.in/delhi-ncr/pandit-for-funeral-services?random=ICs5MSA5NzExMzAwNDcx" title="Pandit For Funeral Services">Pandit For Funeral Services</a></li>
                                </ul>
                            </li>

                            <li><a href="https://www.lastjourney.in/delhi-ncr/transport-services/?random=ICs5MSA5NzExMzAwNDcx" title="Transport Services">Transport Services</a>
                                <ul class="submenu">
                                    <li><a href="https://www.lastjourney.in/delhi-ncr/transport-services/mortuary-van?random=ICs5MSA5NzExMzAwNDcx" title="Mortuary Van">Mortuary Van</a></li>
                                    <li><a href="https://www.lastjourney.in/delhi-ncr/transport-services/body-transportation-by-road?random=ICs5MSA5NzExMzAwNDcx" title="Body Transportation by Road">Body Transportation by Road</a></li>
                                    <li><a href="https://www.lastjourney.in/delhi-ncr/transport-services/body-transportation-by-air?random=ICs5MSA5NzExMzAwNDcx" title="Body Transportation By Air">Body Transportation By Air</a></li>
                                </ul>
                            </li>

                            <li><a href="https://www.lastjourney.in/delhi-ncr/prayer-hall?random=ICs5MSA5NzExMzAwNDcx" title="Prayer Hall">Prayer Hall</a>
                                <ul class="submenu">
                                    <li><a href="https://www.lastjourney.in/delhi-ncr/prayer-hall/dlf-club-5-prayer-hall?random=ICs5MSA5NzExMzAwNDcx" title="DLF Club 5 Prayer Hall">DLF Club 5 Prayer Hall</a></li>
                                    <li><a href="https://www.lastjourney.in/delhi-ncr/prayer-hall/phd-chamber-of-commerce-prayer-hall?random=ICs5MSA5NzExMzAwNDcx" title="Phd Chamber of commerce Prayer hall">Phd Chamber of commerce Prayer hall</a></li>
                                    <li><a href="https://www.lastjourney.in/baba-natha-singh-vatika-prayer-hall?random=ICs5MSA5NzExMzAwNDcx" title="Baba Natha Singh Vatika, Prayer Hall">Baba Natha Singh Vatika, Prayer Hall</a></li>
                                    <li><a href="https://www.lastjourney.in/delhi-ncr/prayer-hall/community-centre-prayer-hall?random=ICs5MSA5NzExMzAwNDcx" title="Community Centre -Prayer Hall">Community Centre -Prayer Hall</a></li>
                                    <li><a href="https://www.lastjourney.in/delhi-ncr/prayer-hall/chhatarpur-mandir-prayer-hall?random=ICs5MSA5NzExMzAwNDcx" title="Chhatarpur Mandir Prayer Hall Venues">Chhatarpur Mandir Prayer Hall Venues</a></li>
                                    <li><a href="https://www.lastjourney.in/delhi-ncr/prayer-hall/sri-sathya-sai-auditorium-prayer-hall?random=ICs5MSA5NzExMzAwNDcx" title="Sri Sathya Sai Auditorium Prayer Hall">Sri Sathya Sai Auditorium Prayer Hall</a></li>
                                    <li><a href="https://www.lastjourney.in/delhi-ncr/prayer-hall/iskcon-temple-prayer-hall-dwarka?random=ICs5MSA5NzExMzAwNDcx" title="Iskcon Temple Prayer Hall Dwarka">Iskcon Temple Prayer Hall Dwarka</a></li>
                                    <li><a href="https://www.lastjourney.in/delhi-ncr/prayer-hall/athmabhishekam-prayer-hall-delhi?random=ICs5MSA5NzExMzAwNDcx" title="Athmabhishekam Prayer Hall, Delhi">Athmabhishekam Prayer Hall, Delhi</a></li>
                                    <li><a href="https://www.lastjourney.in/delhi-ncr/prayer-hall/shah-prayer-hall-auditorium?random=ICs5MSA5NzExMzAwNDcx" title="Shah Prayer Hall Auditorium">Shah Prayer Hall Auditorium</a></li>

                                    <li><a href="https://www.lastjourney.in/delhi-ncr/prayer-hall/arya-samaj-janakpuri-prayer-hall?random=ICs5MSA5NzExMzAwNDcx" title="Arya Samaj Janakpuri Prayer Hall">Arya Samaj Janakpuri Prayer Hall</a></li>

                                    <li><a href="https://www.lastjourney.in/delhi-ncr/prayer-hall/gauri-shankar-mandir-prayer-hall?random=ICs5MSA5NzExMzAwNDcx" title="Gauri Shankar Mandir Prayer Hall">Gauri Shankar Mandir Prayer Hall</a></li>

                                </ul>
                            </li>


                            <li><a href="https://www.lastjourney.in/delhi-ncr/funeral-ceremony?random=ICs5MSA5NzExMzAwNDcx" title="Funeral Ceremony">Funeral Ceremony</a>
                                <ul class="submenu">
                                    <li><a href="https://www.lastjourney.in/delhi-ncr/chautha-and-tehravin-services?random=ICs5MSA5NzExMzAwNDcx" title="Chautha and Tehravin Services">Chautha and Tehravin Services</a></li>
                                    <li><a href="https://www.lastjourney.in/delhi-ncr/asthi-visarjan-services?random=ICs5MSA5NzExMzAwNDcx" title="Asthi Visarjan Services">Asthi Visarjan Services</a></li>
                                    <li><a href="https://www.lastjourney.in/delhi-ncr/artists?random=ICs5MSA5NzExMzAwNDcx" title="Artists">Artists</a></li>
                                </ul>
                            </li>

                            <li><a href="https://www.lastjourney.in/delhi-ncr/obituary?random=ICs5MSA5NzExMzAwNDcx" title="Obituary">Obituary</a>
                            </li>
                            <li><a href="https://www.lastjourney.in/delhi-ncr/antim-sanskar-samagri?random=ICs5MSA5NzExMzAwNDcx" title="Antim Sanskar Samagri">Antim Sanskar Samagri</a>
                            </li>
                            <li><a href="https://www.lastjourney.in/delhi-ncr/pet-cremation?random=ICs5MSA5NzExMzAwNDcx" title="Pet Cremation">Pet Cremation</a>
                            </li>
                            <li><a href="https://www.lastjourney.in/delhi-ncr/catering-services-delhi?random=ICs5MSA5NzExMzAwNDcx" title="Catering Services">Catering Services</a>
                            </li>
                            <li><a href="https://www.lastjourney.in/cremation-ground-delhi-ncr?random=ICs5MSA5NzExMzAwNDcx" title="Cremation Grounds">Cremation Grounds</a>
                            </li>
                        </ul>
                    </li>

                    <li class="menuservice">
                        <a href="#">Special Services </a>
                        <ul class="menu" >
                            <li><a href="https://www.lastjourney.in/repatriation-service/?random=ICs5MSA5NzExMzAwNDcx" title="Repatriation Services">Repatriation Services</a></li>

                            <li>
                                <a href="https://www.lastjourney.in/pre-planning-funeral-services/?random=ICs5MSA5NzExMzAwNDcx">Pre Planning Funeral Services </a> </li>
                            <li> <a href="https://www.lastjourney.in/the-last-journey-funeral-decors/?random=ICs5MSA5NzExMzAwNDcx">The Last Journey Funeral Decors </a> </li>
                            <li> <a href="https://www.lastjourney.in/embalming-services/">Embalming Services </a> </li> <li> <a href="https://www.lastjourney.in/green-funeral-services/?random=ICs5MSA5NzExMzAwNDcx">Green Funeral Services </a> </li>
                            <li> <a href="https://www.lastjourney.in/celebrate-the-life-of-your-loved-one/?random=ICs5MSA5NzExMzAwNDcx">Celebrate the life of your loved one </a> </li>
                            <li> <a href="https://www.lastjourney.in/counselling-services/?random=ICs5MSA5NzExMzAwNDcx">Counselling Services </a> </li>
                            <li> <a href="https://www.lastjourney.in/dog-therapy-services/?random=ICs5MSA5NzExMzAwNDcx">Dog Therapy Services </a> </li>
                            <li> <a href="https://www.lastjourney.in/prayer-meeting-on-zoom/?random=ICs5MSA5NzExMzAwNDcx">Prayer Meeting on Zoom </a> </li>
                        </ul>
                    </li>
                    <li> <a href="https://www.lastjourney.in/our-work/?random=ICs5MSA5NzExMzAwNDcx">Our Work </a> </li>
                    <li> <a href="https://www.lastjourney.in/newsroom/?random=ICs5MSA5NzExMzAwNDcx">News </a></li>
                    <a href="tel:+91 7827777889"><button><svg class="mobile" width="25" viewBox="0 0 30 30"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1122_1436)">
                            <path
                                d="M23.7094 18.583C23.0953 17.9435 22.3544 17.6016 21.5693 17.6016C20.7905 17.6016 20.0434 17.9372 19.4039 18.5767L17.403 20.5712C17.2384 20.4826 17.0738 20.4002 16.9155 20.3179C16.6876 20.204 16.4723 20.0963 16.2887 19.9823C14.4145 18.792 12.7113 17.2407 11.0777 15.2336C10.2862 14.2332 9.75435 13.391 9.36811 12.5363C9.88731 12.0614 10.3685 11.5675 10.8371 11.0926C11.0144 10.9153 11.1916 10.7317 11.3689 10.5544C12.6986 9.22478 12.6986 7.50256 11.3689 6.1729L9.64038 4.44434C9.4441 4.24806 9.24148 4.04545 9.05153 3.84283C8.67163 3.45027 8.27273 3.04504 7.86117 2.66514C7.24699 2.05729 6.51252 1.73438 5.74005 1.73438C4.96758 1.73438 4.22044 2.05729 3.58727 2.66514C3.58094 2.67147 3.58094 2.67147 3.5746 2.6778L1.42182 4.84957C0.611365 5.66003 0.149151 6.64778 0.0478436 7.79382C-0.104117 9.64268 0.440409 11.3649 0.858302 12.4919C1.88404 15.2589 3.41631 17.8232 5.70206 20.5712C8.47534 23.8827 11.8122 26.4977 15.6238 28.3402C17.0801 29.0304 19.024 29.8471 21.1957 29.9864C21.3287 29.9928 21.468 29.9991 21.5946 29.9991C23.0573 29.9991 24.2856 29.4736 25.248 28.4288C25.2544 28.4162 25.267 28.4098 25.2734 28.3972C25.6026 27.9983 25.9825 27.6374 26.3814 27.2511C26.6537 26.9915 26.9323 26.7193 27.2045 26.4344C27.8314 25.7822 28.1606 25.0224 28.1606 24.2436C28.1606 23.4585 27.825 22.705 27.1855 22.0718L23.7094 18.583ZM25.9762 25.2503C25.9698 25.2503 25.9698 25.2567 25.9762 25.2503C25.7292 25.5163 25.476 25.7569 25.2037 26.0228C24.7922 26.4154 24.3743 26.8269 23.9817 27.2891C23.3422 27.973 22.5887 28.2959 21.601 28.2959C21.506 28.2959 21.4047 28.2959 21.3097 28.2895C19.4292 28.1692 17.6816 27.4348 16.371 26.8079C12.7872 25.073 9.64038 22.61 7.02538 19.4885C4.86627 16.8861 3.42264 14.4801 2.46656 11.8968C1.87771 10.3202 1.66243 9.09182 1.7574 7.93311C1.82072 7.19231 2.10565 6.57813 2.63118 6.0526L4.79029 3.89349C5.10054 3.60223 5.42979 3.44394 5.75271 3.44394C6.15161 3.44394 6.47453 3.68454 6.67714 3.88715C6.68347 3.89349 6.6898 3.89982 6.69614 3.90615C7.08237 4.26706 7.44961 4.64063 7.83584 5.03953C8.03212 5.24214 8.23474 5.44475 8.43735 5.6537L10.1659 7.38226C10.8371 8.05342 10.8371 8.67392 10.1659 9.34509C9.98229 9.5287 9.805 9.71232 9.62138 9.88961C9.08952 10.4341 8.58298 10.9407 8.03213 11.4345C8.01946 11.4472 8.0068 11.4535 8.00047 11.4662C7.45594 12.0107 7.55725 12.5426 7.67122 12.9035C7.67755 12.9225 7.68388 12.9415 7.69021 12.9605C8.13976 14.0495 8.77293 15.0753 9.73535 16.2973L9.74169 16.3036C11.4892 18.4564 13.3318 20.1343 15.3642 21.4196C15.6238 21.5843 15.8898 21.7172 16.143 21.8439C16.371 21.9578 16.5863 22.0655 16.7699 22.1795C16.7952 22.1921 16.8205 22.2111 16.8459 22.2238C17.0611 22.3314 17.2638 22.3821 17.4727 22.3821C17.9982 22.3821 18.3275 22.0528 18.4351 21.9452L20.6006 19.7797C20.8158 19.5645 21.1578 19.3049 21.5566 19.3049C21.9492 19.3049 22.2721 19.5518 22.4684 19.7671C22.4747 19.7734 22.4747 19.7734 22.4811 19.7797L25.9698 23.2685C26.622 23.9143 26.622 24.5792 25.9762 25.2503Z"
                                fill="#333333"></path>
                            <path
                                d="M16.2127 7.13708C17.8716 7.41568 19.3785 8.20081 20.5816 9.40383C21.7846 10.6069 22.5634 12.1138 22.8483 13.7727C22.918 14.1906 23.2789 14.4819 23.6904 14.4819C23.7411 14.4819 23.7854 14.4755 23.8361 14.4692C24.3046 14.3932 24.6149 13.95 24.5389 13.4815C24.197 11.4743 23.2472 9.64444 21.7973 8.19448C20.3473 6.74452 18.5174 5.79476 16.5103 5.45285C16.0417 5.37687 15.6048 5.68712 15.5225 6.14934C15.4402 6.61155 15.7441 7.0611 16.2127 7.13708Z"
                                fill="#333333"></path>
                            <path
                                d="M29.9652 13.2336C29.4016 9.92848 27.844 6.92092 25.4507 4.52754C23.0573 2.13415 20.0497 0.576553 16.7446 0.0130316C16.2823 -0.0692806 15.8455 0.247305 15.7631 0.709519C15.6872 1.17807 15.9974 1.61495 16.466 1.69727C19.4165 2.19747 22.1075 3.59678 24.2476 5.73056C26.3877 7.87068 27.7807 10.5617 28.2809 13.5122C28.3506 13.9301 28.7115 14.2214 29.123 14.2214C29.1737 14.2214 29.218 14.215 29.2687 14.2087C29.7309 14.1391 30.0475 13.6958 29.9652 13.2336Z"
                                fill="#333333"></path>
                        </g>
                        <defs>
                            <clippath id="clip0_1122_1436">
                                <rect width="30" height="30" fill="white"></rect>
                            </clippath>
                        </defs>
                    </svg> +91 7827777889</button></a>
                </ul>
            </div>
            <div class="header-grey">
                <div class="location-trigger">
                    <svg width="18" viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M24 12.4901C24 21.2719 12.5 28.7992 12.5 28.7992C12.5 28.7992 1 21.2719 1 12.4901C1 9.49559 2.2116 6.62371 4.36827 4.50625C6.52494 2.38879 9.45001 1.19922 12.5 1.19922C15.55 1.19922 18.4751 2.38879 20.6317 4.50625C22.7884 6.62371 24 9.49559 24 12.4901Z"
                            stroke="#326039" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path
                            d="M12.2909 17.0906C14.8314 17.0906 16.8909 15.0311 16.8909 12.4906C16.8909 9.95011 14.8314 7.89062 12.2909 7.89062C9.75041 7.89062 7.69092 9.95011 7.69092 12.4906C7.69092 15.0311 9.75041 17.0906 12.2909 17.0906Z"
                            stroke="#326039" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <p style={{ fontWeight: 600 }}>Delhi NCR</p>
                </div>
                <div class="location-popup">
                    <div class="location-container">
                        <svg class="location-trigger-close" width="18" height="18" viewBox="0 0 18 18" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 17L1 1M17 1L1 17" stroke="black" stroke-width="2" stroke-linecap="round">
                            </path>
                        </svg>
                        <span class="span_content" style={{ fontSize: 22 }}>Select Your Location From Dropdown
                            List</span>
                        <form action="https://www.lastjourney.in/delhi-ncr/cremation-services/" method="post">
                            <div class="selection">
                                <label>
                                    <input type="radio" name="loc_1" checked="" />
                                    <div class="radio">
                                        <div></div>
                                    </div>
                                    Inside India
                                </label>
                                <label>
                                    <input type="radio" name="loc_1" />
                                    <div class="radio">
                                        <div></div>
                                    </div>
                                    Outside India
                                </label>
                            </div>
                            <div class="pincodes">
                                <div class="pincode-input" id="myDropdown">
                                    <input type="text" name="" id="myLocInput" onkeyup={() => filterFunction} />
                                    <div class="all-pincode">

                                        <label>
                                            <input type="radio" name="pincode" value="Delhi NCR" />
                                            <span>Delhi NCR</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="pincode" value="Bangalore" />
                                            <span>Bangalore</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="pincode" value="Mumbai" />
                                            <span>Mumbai</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="pincode" value="Kolkata" />
                                            <span>Kolkata</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="pincode" value="Select City" /><span>Select
                                                City</span>
                                        </label>
                                    </div>
                                </div>
                                <svg width="25" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M24.5 12.4911C24.5 21.2729 13 28.8002 13 28.8002C13 28.8002 1.5 21.2729 1.5 12.4911C1.5 9.49657 2.7116 6.62468 4.86827 4.50723C7.02494 2.38977 9.95001 1.2002 13 1.2002C16.05 1.2002 18.9751 2.38977 21.1317 4.50723C23.2884 6.62468 24.5 9.49657 24.5 12.4911Z"
                                        stroke="#326039" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                    <path
                                        d="M12.7909 17.0911C15.3314 17.0911 17.3909 15.0316 17.3909 12.4911C17.3909 9.9506 15.3314 7.89111 12.7909 7.89111C10.2504 7.89111 8.19092 9.9506 8.19092 12.4911C8.19092 15.0316 10.2504 17.0911 12.7909 17.0911Z"
                                        stroke="#326039" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                </svg>
                            </div>
                            <input type="button" value="Continue" onclick={() => getCityId} />
                        </form>
                    </div>
                </div>
            </div >
        </div >
    )

}


export default Header;
