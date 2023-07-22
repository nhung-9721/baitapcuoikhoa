document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("register-form");
  
    registerForm?.addEventListener("submit", function (event) {
      // Ngăn hành động submit mặc định của form (reload hoặc chuyển trang tùy theo `action` của form)
      event.preventDefault();
  
      // Lấy giá trị của các input
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirm-password").value;
  
      // Kiểm tra password và confirm password có giống nhau hay không
      if (password !== confirmPassword) {
        alert("Mật khẩu không khớp");
        return;
      }
  
      // Lưu thông tin đăng ký vào Local Storage
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    });
  });