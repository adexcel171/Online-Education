import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <div class="container-fluid position-relative overlay-top bg-dark text-white-50 py-5" style={{marginTop: "90px"}} >
        <div class="container mt-5 pt-5">
            <div class="row">
                <div class="col-md-6 mb-5">
                    <a href="index.html" class="navbar-brand">
                        <h1 class="mt-n2 text-uppercase text-white"><i class="fa fa-book-reader mr-3"></i>Excel</h1>
                    </a>
                    <p class="m-0">Accusam nonumy clita sed rebum kasd eirmod elitr. Ipsum ea lorem at et diam est, tempor rebum ipsum sit ea tempor stet et consetetur dolores. Justo stet diam ipsum lorem vero clita diam</p>
                </div>
                <div class="col-md-6 mb-5">
                    <h3 class="text-white mb-4">Newsletter</h3>
                    <div class="w-100">
                        <div class="input-group">
                            <input type="text" class="form-control border-light p-2"  placeholder="Your Email Address"/>
                            <div class="input-group-append">
                                <button class="btn btn-primary px-4">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 mb-5">
                    <h3 class="text-white mb-4">Get In Touch</h3>
                    <p><i class="fa fa-map-marker-alt mr-2"></i>Abuja, Nigeria</p>
                    <p><i class="fa fa-phone-alt mr-2"></i>+234 922 3162</p>
                    <p><i class="fa fa-envelope mr-2"></i>godwillokenyi@gmail.com</p>
                    <div class="d-flex justify-content-start mt-4">
                        <a class="text-white mr-4" href="#"><i class="fab fa-2x fa-twitter"></i></a>
                        <a class="text-white mr-4" href="#"><i class="fab fa-2x fa-facebook-f"></i></a>
                        <a class="text-white mr-4" href="#"><i class="fab fa-2x fa-linkedin-in"></i></a>
                        <a class="text-white" href="#"><i class="fab fa-2x fa-instagram"></i></a>
                    </div>
                </div>
                <div class="col-md-4 mb-5">
                    <h3 class="text-white mb-4">Our Courses</h3>
                    <div class="d-flex flex-column justify-content-start">
                        <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Web Design</a>
                        <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Apps Design</a>
                        <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Marketing</a>
                        <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Research</a>
                        <a class="text-white-50" href="#"><i class="fa fa-angle-right mr-2"></i>SEO</a>
                    </div>
                </div>
                <div class="col-md-4 mb-5">
                    <h3 class="text-white mb-4">Quick Links</h3>
                    <div class="d-flex flex-column justify-content-start">
                        <Link class="text-white-50 mb-2" ><i class="fa fa-angle-right mr-2"></i>Privacy Policy</Link>
                        <Link class="text-white-50 mb-2" ><i class="fa fa-angle-right mr-2"></i>Terms & Condition</Link>
                        <Link class="text-white-50 mb-2" ><i class="fa fa-angle-right mr-2"></i>Regular FAQs</Link>
                        <Link class="text-white-50 mb-2" ><i class="fa fa-angle-right mr-2"></i>Help & Support</Link>
                        <Link class="text-white-50" ><i class="fa fa-angle-right mr-2"></i>Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <div class="container-fluid bg-dark text-white-50 border-top py-4"style={{borderColor: "rgba(256, 256, 256, .1) "}}>
        <div class="container">
            <div class="row">
                <div class="col-md-6 text-center text-md-left mb-3 mb-md-0">
                    <p class="m-0">Copyright &copy; <a class="text-white" href="#">Your Site Name</a>. All Rights Reserved.
                    </p>
                </div>
                <div class="col-md-6 text-center text-md-right">
                    <p class="m-0">Designed by <a class="text-white" to='/'>Godswill</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer