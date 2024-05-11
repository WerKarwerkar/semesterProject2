

const loginModal = `
<div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
    <div class="modal-header position-relative mb-3 border-bottom-0">
    <h5 class="modal-title w-100 text-center position-absolute mt-3" id="loginModalLabel">Log In</h5>
    <button type="button" class="btn-close position-absolute" data-dismiss="modal" aria-label="Close" style="right: 15px;"></button>
  </div>
      <div class="modal-header justify-content-center mx-2">
      <a href="#" class="text-primary me-1" style="text-decoration: none;">Create account</a>
      <a href="#" class="text-primary ms-1">Sign up</a>
    </div>
      <div class="modal-body">
        <form id="log-in-form">
          <div class="mb-3">
            <label for="inputEmail" class="form-label">Email</label>
            <input type="email" class="form-control" id="inputEmail" name="email" placeholder="Enter your email"  pattern="[a-zA-Z0-9._%]+@stud\.noroff\.no$" title="Please enter a valid email address with the domain 'stud.noroff.no'" required>
          </div>
          <div class="mb-3">
            <label for="inputPassword" class="form-label">Password</label>
            <input type="password" class="form-control" id="inputPassword" name="password" placeholder="Enter your password" minlength="8" required>
          </div>
          <div class="d-flex justify-content-between">
            <div class="form-check mb-3">
              <input type="checkbox" class="form-check-input" id="rememberMe">
              <label class="form-check-label" for="rememberMe">Remember me</label>
            </div>
            <div class="mb-3">
              <a href="#" class="text-secondary" style="text-decoration: underline;">Forgot password?</a>
            </div>
          </div>
          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary">Login</button>
          </div>
          <div class="d-grid gap-2">
              <h3 id="reg-message"></h3>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
`;




const signinModal = `
<div class="modal fade" id="signinModal" tabindex="-1" aria-labelledby="signinModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header position-relative mb-3 border-bottom-0">
        <h5 class="modal-title w-100 text-center position-absolute mt-3" id="signinModalLabel">Sign Up</h5>
        <button type="button" class="btn-close position-absolute" data-dismiss="modal" aria-label="Close" style="right: 15px;"></button>
      </div>
      <div class="modal-body">
        <form id="sign-in-form">
          <div class="mb-3">
              <label for="inputName" class="form-label">Name</label>
              <input type="text" name="name" class="form-control" id="inputName" placeholder="Enter your name" pattern="[a-zA-Z0-9_]{6,20}" title="Name must contain only letters, numbers, and underscores, and be between 6 and 20 characters long" required>
          </div>
          <div class="mb-3">
              <label for="signinEmail" class="form-label">Email</label>
              <input type="email" name="email" class="form-control" id="signinEmail" placeholder="Enter your email" pattern="[a-zA-Z0-9._%]+@stud\.noroff\.no$" title="Please enter a valid email address with the domain 'stud.noroff.no'" required>
          </div>
          <div class="mb-3">
              <label for="signinPassword" class="form-label">Password</label>
              <input type="password" name="password" class="form-control" id="signinPassword" placeholder="Create a password" minlength="8" required>
          </div>
          <div class="mb-3">
              <label for="avatarUrl" class="form-label">Avatar URL</label>
              <input type="text" class="form-control" id="avatarUrl" placeholder="Enter the URL of your avatar">
          </div>
          <div class="mb-3">
              <label for="bannerUrl" class="form-label">Banner</label>
              <input type="text" class="form-control" id="bannerUrl" placeholder="Enter your banner">
          </div>
          <div class="d-grid gap-2">
              <button type="submit" class="btn btn-primary">Sign Up</button>
          </div>
          <div class="d-grid gap-2">
              <h3 id="reg-message"></h3>
          </div>
        </form>
      </div>
    </div>
  </div>
</div> 
`;





const creatListing = `
<div class="modal fade" id="createListingModal" tabindex="-1" aria-labelledby="createListingModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header position-relative mb-3 border-bottom-0">
        <h5 class="modal-title w-100 text-center position-absolute mt-3" id="createListingModalLabel">Create Listing</h5>
        <button type="button" class="btn-close position-absolute" data-dismiss="modal" aria-label="Close" style="right: 15px;"></button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-md-6">
            <form>
              <div class="mb-3">
                <label for="listingTitle" class="form-label">Title</label>
                <input type="text" class="form-control" id="listingTitle" placeholder="Enter the title">
              </div>
              <div class="mb-3">
                <label for="listingDescription" class="form-label">Description</label>
                <textarea class="form-control" id="listingDescription" placeholder="Describe your product"></textarea>
              </div>
              <div class="mb-3">
                <label for="listingImage" class="form-label">Image URL</label>
                <input type="text" class="form-control" id="listingImage" placeholder="Add image url">
              </div>
              <div class="mb-3">
                <label for="basePrice" class="form-label">Base Price</label>
                <input type="text" class="form-control" id="basePrice" placeholder="Price the product">
              </div>
              <div class="mb-3">
                <label for="bidValue" class="form-label">Bid Value</label>
                <input type="text" class="form-control" id="bidValue" placeholder="Enter next bid price">
              </div>
              <div class="mb-3">
                <label for="listingTags" class="form-label">Tags</label>
                <input type="text" class="form-control" id="listingTags" placeholder="Tags (use comma to separate)">
              </div>
              <div class="mb-3">
                <label for="dueDate" class="form-label">Due Date</label>
                <input type="date" class="form-control" id="dueDate">
              </div>
              <div class="form-check mb-3">
                <input type="checkbox" class="form-check-input" id="acceptTerms">
                <label class="form-check-label" for="acceptTerms">Accept terms and conditions of AlleBids</label>
              </div>
              <div class="d-grid gap-2">
                <button type="submit" class="btn btn-primary">Create a Listing</button>
              </div>
            </form>
          </div>
          <div class="col-md-6">
            <img src="" alt="Product Image" class="img-fluid mb-3" id="productImage">
            <div class="row mb-2">
              <div class="col-6">
                <h6 class="text-muted">Current bid:</h6>
              </div>
              <div class="col-6 text-end">
                <h6 class="text-muted"><span id="currentBid">1800 credits</span></h6>
              </div>
            </div>
            <div class="row mb-2">
              <div class="col-6">
                <h6 class="text-muted">Next bid:</h6>
              </div>
              <div class="col-6 text-end">
                <h6 class="text-muted"><span id="nextBid">2000 credits</span></h6>
              </div>
            </div>
            <h5 class="fs-5">Description</h5>
            <p class="fs-6" id="productDescription">Description text</p>
            <div class="d-grid gap-2">
              <button class="btn btn-primary">Bid Now</button>
            </div>
            <p class="text-muted"><small>Due date: <span id="listingDueDate"></span></small></p>
          </div>
       

`;












function loginmodal() {
    document.querySelector('.login-display').innerHTML = loginModal;
    var myModal = new bootstrap.Modal(document.getElementById('loginModal'), {});
    myModal.show();
    listenLogIn()
}


function signinmodal() {    
  document.querySelector('.signin-display').innerHTML = signinModal;
  var myModal = new bootstrap.Modal(document.getElementById('signinModal'), {});
  myModal.show();

  listenSignIn()
}




function createListingModal() {    
    document.querySelector('.createListing-display').innerHTML = creatListing;
    var myModal = new bootstrap.Modal(document.getElementById('createListingModal'), {});
    myModal.show();
}