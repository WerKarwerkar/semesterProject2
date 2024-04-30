

const loginModal = `
<div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
    <div class="modal-header position-relative mb-3">
    <h5 class="modal-title w-100 text-center position-absolute mt-3" id="loginModalLabel">Log In</h5>
    <button type="button" class="btn-close position-absolute" data-bs-dismiss="modal" aria-label="Close" style="right: 15px;"></button>
  </div>
      <div class="modal-header justify-content-center mx-2">
      <a href="#" class="text-primary me-1" style="text-decoration: none;">Create account</a>
      <a href="#" class="text-primary ms-1">Sign up</a>
    </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="inputEmail" class="form-label">Email</label>
            <input type="email" class="form-control" id="inputEmail" placeholder="Enter your email">
          </div>
          <div class="mb-3">
            <label for="inputPassword" class="form-label">Password</label>
            <input type="password" class="form-control" id="inputPassword" placeholder="Enter your password">
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
      <div class="modal-header position-relative mb-3">
        <h5 class="modal-title w-100 text-center position-absolute mt-3" id="signinModalLabel">Sign Up</h5>
        <button type="button" class="btn-close position-absolute" data-bs-dismiss="modal" aria-label="Close" style="right: 15px;"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="inputName" class="form-label">Name</label>
            <input type="text" class="form-control" id="inputName" placeholder="Enter your name">
          </div>
          <div class="mb-3">
            <label for="signinEmail" class="form-label">Email</label>
            <input type="email" class="form-control" id="signinEmail" placeholder="Enter your email">
          </div>
          <div class="mb-3">
            <label for="signinPassword" class="form-label">Password</label>
            <input type="password" class="form-control" id="signinPassword" placeholder="Create a password">
          </div>
          <div class="mb-3">
          <label for="avatarUrl" class="form-label">Avatar URL</label>
         <input type="text" class="form-control" id="avatarUrl" placeholder="Enter the URL of your avatar">
         </div>
          <div class="mb-3">
            <label for="bannerinload" class="form-label">Banner</label>
            <input type="file" class="form-control" id="bannerinload" accept="image/*">
          </div>
          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div> 
`;






const creatListing = `
<div class="modal fade" id="createListingModal" tabindex="-1" aria-labelledby="createListingModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg"> <!-- Larger modal for more content -->
    <div class="modal-content">
      <div class="modal-header position-relative mb-3">
        <h5 class="modal-title w-100 text-center position-absolute mt-3" id="createListingModalLabel">Create Listing</h5>
        <button type="button" class="btn-close position-absolute" data-bs-dismiss="modal" aria-label="Close" style="right: 15px;"></button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-md-6"> <!-- Left column for text inputs -->
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
            <div class="product-details">
              <img src="" alt="Product Image" class="img-fluid mb-3" id="productImage">
              <h6 class="text-muted">Current bid: <span id="currentBid">1800 credits</span></h6>
              <h6 class="text-muted">Next bid: <span id="nextBid">2000 credits</span></h6>
              <p id="productDescription">A gold bar is a heavy, pure metal symbol of wealth, its value verified by its smooth surface's marked weight and fineness.</p>
              <div class="d-grid gap-2">
                <button class="btn btn-primary">Bid Now</button>
              </div>
              <p class="text-muted"><small>Due date: <span id="listingDueDate">23.04.2024</span></small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;













function loginmodal() {
    document.querySelector('.login-display').innerHTML = loginModal;
    var myModal = new bootstrap.Modal(document.getElementById('loginModal'), {});
    myModal.show();
}




function signinmodal() {    
    document.querySelector('.signin-display').innerHTML = signinModal;
    var myModal = new bootstrap.Modal(document.getElementById('signinModal'), {});
    myModal.show();
}


function createListingModal() {    
    document.querySelector('.createListing-display').innerHTML = creatListing;
    var myModal = new bootstrap.Modal(document.getElementById('createListingModal'), {});
    myModal.show();
}