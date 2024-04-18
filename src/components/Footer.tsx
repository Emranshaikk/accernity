"use client"

function footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
            <div>
                <h2>About Us</h2>
                <p> We are one of the best music school in India</p>       
            </div>
            <div>
              <h2>Quick Links</h2>
              <h4>Courses</h4>
              <h4>Pricing</h4>
              <h4>Career</h4>
              <h4>About Us</h4>
            </div>
            <div>
              <h2> Follow Us </h2>
              <h4>Facebook</h4>
              <h4>Instagram</h4>
              <h4>Twitter</h4>
              <h4>Youtube</h4>
            </div>
            <div>
              <h2>Contact Us</h2>
              <h4>Hyderabad, Telangana </h4>
              <h4>Shastripuram </h4>
              <h4>Email: info@codev.com</h4>
              <h4>Phone : +91 8801079030</h4>
            </div>
            <p className="text-center text-xs pt-8"> 2024 Music School. All Rights Reserved</p>

        </div>
    </footer>
  )
}

export default footer