import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
    <div class="container-fluid bg-dark">
    <div class="row py-2 px-lg-5">
        <div class="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
            <div class="d-inline-flex align-items-center text-white">
                <small><i class="fa fa-phone-alt mr-2"></i>+234 922 3162</small>
                <small class="px-3">|</small>
                <small><i class="fa fa-envelope mr-2"></i>godwillokenyi@gmail.com</small>
            </div>
        </div>
        <div class="col-lg-6 text-center text-lg-right">
            <div class="d-inline-flex align-items-center">
                <a class="text-white px-2" href="">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a class="text-white px-2" href="">
                    <i class="fab fa-twitter"></i>
                </a>
                <a class="text-white px-2" href="">
                    <i class="fab fa-linkedin-in"></i>
                </a>
                <a class="text-white px-2" href="">
                    <i class="fab fa-instagram"></i>
                </a>
                <a class="text-white pl-2" href="">
                    <i class="fab fa-youtube"></i>
                </a>
            </div>
        </div>
    </div>
</div>
    <div class="container-fluid p-0">
        <nav class="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
            <a href="index.html" class="navbar-brand ml-lg-3">
                <h1 class="m-0 text-uppercase text-primary"><i class="fa fa-book-reader mr-3"></i>A-E Academy </h1>
            </a>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
                <div class="navbar-nav mx-auto py-0">
                    <Link to='/' class="nav-item nav-link">Home</Link>
                    <Link to='/aboutpage' class="nav-item nav-link">About</Link>
                    <Link  to='/coursepage' class="nav-item nav-link">Courses</Link>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                        <div class="dropdown-menu m-0">
                            <Link to='/details' class="dropdown-item">Course Detail</Link>
                            <Link  to='/features' class="dropdown-item">Our Features</Link>
                            <Link to='/instructors' class="dropdown-item">Instructors</Link>
                            <Link to='/testimonials' class="dropdown-item">Testimonial</Link>
                        </div>
                    </div>
                    <Link to='/contact' class="nav-item nav-link">Contact</Link>
                </div>
                <a href="" class="btn btn-primary py-2 px-4 d-none d-lg-block">Join Us</a>
            </div>
        </nav>
    </div>
 
    </div>
  )
}

export default Navbar