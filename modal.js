

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
      <a href="#" id="signUpLink" class="text-primary ms-1">Sign up</a>
      </div>
      <div class="modal-body">
        <form id="log-in-form">
          <div class="mb-3">
            <label for="inputEmail" class="form-label">Email</label>
            <input type="email" class="form-control" name="email" id="inputEmail" placeholder="Enter your email">
          </div>
          <div class="mb-3">
            <label for="inputPassword" class="form-label">Password</label>
            <input type="password" class="form-control" name="password" id="inputPassword" placeholder="Enter your password">
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
              <input type="text" name="name" class="form-control" id="inputName" placeholder="Enter your name" pattern="[a-zA-Z0-9_]{6,20}" title="Name must contain only letters, numbers, and underscores, and be between 6 and 20 characters long">
          </div>
          <div class="mb-3">
              <label for="signinEmail" class="form-label">Email</label>
              <input type="email" name="email" class="form-control" id="signinEmail" placeholder="Enter your email" pattern="[a-zA-Z0-9._%]+@stud\.noroff\.no$" title="Please enter a valid email address with the domain 'stud.noroff.no'">
          </div>
          <div class="mb-3">
              <label for="signinPassword" class="form-label">Password</label>
              <input type="password" name="password" class="form-control" id="signinPassword" placeholder="Create a password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Password must contain at least one digit, one uppercase and one lowercase letter, and be at least 8 characters long">
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
              <button class="btn btn-primary">Sign Up</button>
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
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header position-relative mb-3 border-bottom-0">
        <h5 class="modal-title w-100 text-center position-absolute mt-3" id="createListingModalLabel">Create Listing</h5>
        <button type="button" class="btn-close position-absolute" data-dismiss="modal" aria-label="Close" style="right: 15px;"></button>
      </div>
      <div class="modal-body">
        <form id="create-listing">
          <div class="mb-3">
            <label for="listingTitle" class="form-label">Title</label>
            <input type="text" name="title" class="form-control" id="listingTitle" placeholder="Enter the title">
          </div>
          <div class="mb-3">
            <label for="listingDescription" class="form-label">Description</label>
            <textarea class="form-control" name="description" id="listingDescription" placeholder="Describe your product"></textarea>
          </div>
          <div class="mb-3">
            <label for="listingImage" class="form-label">Image URL</label>
            <input type="text" name="url" class="form-control" id="listingImage" placeholder="Add image url (use comma to separate)">
          </div>
          <div class="mb-3">
            <label for="listingTags" class="form-label">Tags</label>
            <input type="text" name="tags" class="form-control" id="listingTags" placeholder="Tags (use comma to separate)">
          </div>
          <div class="mb-3">
            <label for="dueDate" class="form-label">Due Date</label>
            <input type="date" name="endsAt" class="form-control" id="dueDate">
          </div>
          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary">Create a Listing</button>
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




function loginmodal() {
  document.querySelector('.login-display').innerHTML = loginModal;
  var myModal = new bootstrap.Modal(document.getElementById('loginModal'), {});
  myModal.show();

  document.getElementById('signUpLink').addEventListener('click', function(event) {
      event.preventDefault();
      myModal.hide();
      signinmodal();
  });

  listenLogIn();
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

    listenCratingListing()
}