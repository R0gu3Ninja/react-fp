import React from 'react'
import '../css/homepage.css'

const Footer = () => {
    return (
        <div class="footer">
            <div class="footer-section-1">
                <div>
                    <img class="lazyload"
                        src="https://www.lastjourney.in/lp/assets/designer/themes/default/images/footer-logo.webp"
                        alt="" />
                    <p>The Last Journey is a team of professionals working towards conducting dignified last
                        rites for
                        your loved one. We aim at bringing homes and families peace by assisting you during the
                        most
                        distressing times.
                    </p>
                </div>
                <div class="links">
                    <p class="footer-heading">Address</p>
                    <p>FNP Care LLP<br />
                        Khasra No. 584 585 586<br />
                        G/F, Gadaipur, New Delhi,<br />
                        New Delhi, Delhi, 110030,<br />
                        India </p>
                </div>
                <div class="links">
                    <p class="footer-heading">Quick Links</p>
                    <ul>
                        <li><a href="https://lastjourney.in/hindi/" target="_blank">Hindi Blog</a></li>
                        <li><a href="https://www.lastjourney.in/funeral-e-invites/" target="_blank">Funeral
                            E-invites</a></li>
                        <li><a href="https://www.lastjourney.in/careers">Careers</a></li>
                    </ul>
                </div>
                <div class="links">
                    <div class="connect">
                        <p class="footer-heading">Connect With Us</p>
                        <div>
                            <a href="https://www.facebook.com/lastjourneybyFNP/">
                                <img alt="svgImg" class="lazyload"
                                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgICA8cGF0aCBkPSJNMTIsMkM2LjQ3NywyLDIsNi40NzcsMiwxMmMwLDUuMDEzLDMuNjkzLDkuMTUzLDguNTA1LDkuODc2VjE0LjY1SDguMDMxdi0yLjYyOWgyLjQ3NHYtMS43NDkgYzAtMi44OTYsMS40MTEtNC4xNjcsMy44MTgtNC4xNjdjMS4xNTMsMCwxLjc2MiwwLjA4NSwyLjA1MSwwLjEyNHYyLjI5NGgtMS42NDJjLTEuMDIyLDAtMS4zNzksMC45NjktMS4zNzksMi4wNjF2MS40MzdoMi45OTUgbC0wLjQwNiwyLjYyOWgtMi41ODh2Ny4yNDdDMTguMjM1LDIxLjIzNiwyMiwxNy4wNjIsMjIsMTJDMjIsNi40NzcsMTcuNTIzLDIsMTIsMnoiPjwvcGF0aD4KPC9zdmc+" /></a>
                            <a href="https://twitter.com/LastJourney7">
                                <img alt="svgImg" class="lazyload"
                                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAzMCAzMCI+CiAgICA8cGF0aCBkPSJNMjgsNi45MzdjLTAuOTU3LDAuNDI1LTEuOTg1LDAuNzExLTMuMDY0LDAuODRjMS4xMDItMC42NiwxLjk0Ny0xLjcwNSwyLjM0NS0yLjk1MWMtMS4wMywwLjYxMS0yLjE3MiwxLjA1NS0zLjM4OCwxLjI5NSBjLTAuOTczLTEuMDM3LTIuMzU5LTEuNjg1LTMuODkzLTEuNjg1Yy0yLjk0NiwwLTUuMzM0LDIuMzg5LTUuMzM0LDUuMzM0YzAsMC40MTgsMC4wNDgsMC44MjYsMC4xMzgsMS4yMTUgYy00LjQzMy0wLjIyMi04LjM2My0yLjM0Ni0xMC45OTUtNS41NzRDMy4zNTEsNi4xOTksMy4wODgsNy4xMTUsMy4wODgsOC4wOTRjMCwxLjg1LDAuOTQxLDMuNDgzLDIuMzcyLDQuNDM5IGMtMC44NzQtMC4wMjgtMS42OTctMC4yNjgtMi40MTYtMC42NjdjMCwwLjAyMywwLDAuMDQ0LDAsMC4wNjdjMCwyLjU4NSwxLjgzOCw0Ljc0MSw0LjI3OSw1LjIzIGMtMC40NDcsMC4xMjItMC45MTksMC4xODctMS40MDYsMC4xODdjLTAuMzQzLDAtMC42NzgtMC4wMzQtMS4wMDMtMC4wOTVjMC42NzksMi4xMTksMi42NDksMy42NjIsNC45ODMsMy43MDUgYy0xLjgyNSwxLjQzMS00LjEyNSwyLjI4NC02LjYyNSwyLjI4NGMtMC40MywwLTAuODU1LTAuMDI1LTEuMjczLTAuMDc1YzIuMzYxLDEuNTEzLDUuMTY0LDIuMzk2LDguMTc3LDIuMzk2IGM5LjgxMiwwLDE1LjE3Ni04LjEyOCwxNS4xNzYtMTUuMTc3YzAtMC4yMzEtMC4wMDUtMC40NjEtMC4wMTUtMC42OUMyNi4zOCw4Ljk0NSwyNy4yODUsOC4wMDYsMjgsNi45Mzd6Ij48L3BhdGg+Cjwvc3ZnPg==" /></a>
                            <a href="https://www.youtube.com/@lastjourney9576">
                                <img alt="svgImg" class="lazyload"
                                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgICA8cGF0aCBkPSJNMjEuNTgyLDYuMTg2Yy0wLjIzLTAuODYtMC45MDgtMS41MzgtMS43NjgtMS43NjhDMTguMjU0LDQsMTIsNCwxMiw0UzUuNzQ2LDQsNC4xODYsNC40MTggYy0wLjg2LDAuMjMtMS41MzgsMC45MDgtMS43NjgsMS43NjhDMiw3Ljc0NiwyLDEyLDIsMTJzMCw0LjI1NCwwLjQxOCw1LjgxNGMwLjIzLDAuODYsMC45MDgsMS41MzgsMS43NjgsMS43NjggQzUuNzQ2LDIwLDEyLDIwLDEyLDIwczYuMjU0LDAsNy44MTQtMC40MThjMC44NjEtMC4yMywxLjUzOC0wLjkwOCwxLjc2OC0xLjc2OEMyMiwxNi4yNTQsMjIsMTIsMjIsMTJTMjIsNy43NDYsMjEuNTgyLDYuMTg2eiBNMTAsMTQuNTk4VjkuNDAyYzAtMC4zODUsMC40MTctMC42MjUsMC43NS0wLjQzM2w0LjUsMi41OThjMC4zMzMsMC4xOTIsMC4zMzMsMC42NzQsMCwwLjg2NmwtNC41LDIuNTk4IEMxMC40MTcsMTUuMjI0LDEwLDE0Ljk4MywxMCwxNC41OTh6Ij48L3BhdGg+Cjwvc3ZnPg==" /></a>
                        </div>
                    </div>
                    <div class="payment">
                        <p class="footer-heading">Payment</p>
                        <a href="https://www.lastjourney.in/payments" style={{ cursor: 'pointer' }}><button
                            style={{ cursor: 'pointer' }}>Pay Now</button></a>
                    </div>
                    <div class="icons">
                        <img alt="visa" class="lazyload"
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiMxNTY1QzAiIGQ9Ik00NSwzNWMwLDIuMjA5LTEuNzkxLDQtNCw0SDdjLTIuMjA5LDAtNC0xLjc5MS00LTRWMTNjMC0yLjIwOSwxLjc5MS00LDQtNGgzNGMyLjIwOSwwLDQsMS43OTEsNCw0VjM1eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xNS4xODYgMTlsLTIuNjI2IDcuODMyYzAgMC0uNjY3LTMuMzEzLS43MzMtMy43MjktMS40OTUtMy40MTEtMy43MDEtMy4yMjEtMy43MDEtMy4yMjFMMTAuNzI2IDMwdi0uMDAyaDMuMTYxTDE4LjI1OCAxOUgxNS4xODZ6TTE3LjY4OSAzMEwyMC41NiAzMCAyMi4yOTYgMTkgMTkuMzg5IDE5ek0zOC4wMDggMTloLTMuMDIxbC00LjcxIDExaDIuODUybC41ODgtMS41NzFoMy41OTZMMzcuNjE5IDMwaDIuNjEzTDM4LjAwOCAxOXpNMzQuNTEzIDI2LjMyOGwxLjU2My00LjE1Ny44MTggNC4xNTdIMzQuNTEzek0yNi4zNjkgMjIuMjA2YzAtLjYwNi40OTgtMS4wNTcgMS45MjYtMS4wNTcuOTI4IDAgMS45OTEuNjc0IDEuOTkxLjY3NGwuNDY2LTIuMzA5YzAgMC0xLjM1OC0uNTE1LTIuNjkxLS41MTUtMy4wMTkgMC00LjU3NiAxLjQ0NC00LjU3NiAzLjI3MiAwIDMuMzA2IDMuOTc5IDIuODUzIDMuOTc5IDQuNTUxIDAgLjI5MS0uMjMxLjk2NC0xLjg4OC45NjQtMS42NjIgMC0yLjc1OS0uNjA5LTIuNzU5LS42MDlsLS40OTUgMi4yMTZjMCAwIDEuMDYzLjYwNiAzLjExNy42MDYgMi4wNTkgMCA0LjkxNS0xLjU0IDQuOTE1LTMuNzUyQzMwLjM1NCAyMy41ODYgMjYuMzY5IDIzLjM5NCAyNi4zNjkgMjIuMjA2eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNGRkMxMDciIGQ9Ik0xMi4yMTIsMjQuOTQ1bC0wLjk2Ni00Ljc0OGMwLDAtMC40MzctMS4wMjktMS41NzMtMS4wMjljLTEuMTM2LDAtNC40NCwwLTQuNDQsMFMxMC44OTQsMjAuODQsMTIuMjEyLDI0Ljk0NXoiPjwvcGF0aD4KPC9zdmc+" />
                        <img alt="master" class="lazyload"
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiMzRjUxQjUiIGQ9Ik00NSwzNWMwLDIuMjA5LTEuNzkxLDQtNCw0SDdjLTIuMjA5LDAtNC0xLjc5MS00LTRWMTNjMC0yLjIwOSwxLjc5MS00LDQtNGgzNGMyLjIwOSwwLDQsMS43OTEsNCw0VjM1eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNGRkMxMDciIGQ9Ik0zMCAxNEExMCAxMCAwIDEgMCAzMCAzNEExMCAxMCAwIDEgMCAzMCAxNFoiPjwvcGF0aD48cGF0aCBmaWxsPSIjRkYzRDAwIiBkPSJNMjIuMDE0LDMwYy0wLjQ2NC0wLjYxNy0wLjg2My0xLjI4NC0xLjE3Ni0yaDUuMzI1YzAuMjc4LTAuNjM2LDAuNDk2LTEuMzA0LDAuNjM3LTJoLTYuNTk4QzIwLjA3LDI1LjM1NCwyMCwyNC42ODYsMjAsMjRoN2MwLTAuNjg2LTAuMDctMS4zNTQtMC4yMDEtMmgtNi41OThjMC4xNDItMC42OTYsMC4zNTktMS4zNjQsMC42MzctMmg1LjMyNWMtMC4zMTMtMC43MTYtMC43MTEtMS4zODMtMS4xNzYtMmgtMi45NzNjMC40MzctMC41OCwwLjkzLTEuMTIyLDEuNDgxLTEuNTk1QzIxLjc0NywxNC45MDksMTkuNDgxLDE0LDE3LDE0Yy01LjUyMywwLTEwLDQuNDc3LTEwLDEwczQuNDc3LDEwLDEwLDEwYzMuMjY5LDAsNi4xNjItMS41NzUsNy45ODYtNEgyMi4wMTR6Ij48L3BhdGg+Cjwvc3ZnPg==" />
                        <img alt="maestro" class="lazyload"
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiNGNDQzMzYiIGQ9Ik0zMyAxMUExMyAxMyAwIDEgMCAzMyAzN0ExMyAxMyAwIDEgMCAzMyAxMVoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMjE5NkYzIiBkPSJNMjgsMjRoLThjMC0wLjY4MiwwLjA2OC0xLjM0NywwLjE2OS0yaDcuNjYxYy0wLjEwNS0wLjY4NS0wLjI1NS0xLjM1NC0wLjQ2NC0yaC02LjczMmMwLjIyNS0wLjY5NCwwLjUwOC0xLjM2MiwwLjg0LTJoNS4wNTFjLTAuMzY5LTAuNzA5LTAuODA0LTEuMzc2LTEuMjkzLTJoLTIuNDY1YzAuMzc5LTAuNDg0LDAuNzktMC45NDEsMS4yMzMtMS4zNjdjLTAuMjI2LTAuMjE4LTAuNDU1LTAuNDMyLTAuNjk2LTAuNjMzYy0yLjI1Mi0xLjg3Mi01LjE0Ni0zLTguMzA0LTNDNy44MiwxMSwyLDE2LjgyLDIsMjRzNS44MiwxMywxMywxM2MzLjQ5NiwwLDYuNjY0LTEuMzg4LDktMy42MzNjMC40NDMtMC40MjYsMC44NTQtMC44ODMsMS4yMzItMS4zNjdoLTIuNDY1Yy0wLjQ4OS0wLjYyNC0wLjkyMy0xLjI5MS0xLjI5My0yaDUuMDUxYzAuMzMzLTAuNjM4LDAuNjE2LTEuMzA2LDAuODQxLTJoLTYuNzMyYy0wLjIwOS0wLjY0Ni0wLjM1OC0xLjMxNS0wLjQ2NC0yaDcuNjYxQzI3LjkzMiwyNS4zNDcsMjgsMjQuNjgyLDI4LDI0eiI+PC9wYXRoPgo8L3N2Zz4=" />
                    </div>
                </div>
            </div>
            <div class="footer-section-1 footer-copyright">
                <div>
                    <p>Copyright 2023, All Right Reserved.</p>
                </div>
                <div class="footer-text">
                    <a href="https://www.lastjourney.in/privacy-policy/">
                        <p>Privacy policy</p>
                    </a> <a href="https://www.lastjourney.in/terms-and-conditions/">
                        <p>Term &amp; Conditions</p>
                    </a> <a href="https://www.lastjourney.in/sitemap/">
                        <p>Sitemap</p>
                    </a>
                </div>

            </div>
            <div class="sticky-footer">
                <p>24x7 Response Guaranteed</p>
                <a href="tel:+91 9711300471"><button>Call Now +91 9711300471</button></a>
            </div>
        </div>
    )
}

export default Footer