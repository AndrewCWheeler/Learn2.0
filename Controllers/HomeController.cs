using System;
using System.Web;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using Learn.Data;
using Learn.Models;

namespace Learn.Controllers
{
    public class HomeController : Controller
    {
        private readonly LearnContext _context;

        public HomeController(LearnContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            int? LoggedUser = HttpContext.Session.GetInt32("UserId");
            if(LoggedUser == null)
            {
                return View();
            }
            HttpContext.Session.Clear();
            return View();
        }

        [HttpPost]
        public IActionResult Register(LogRegWrapper user)
        {
            if(ModelState.IsValid)
            {
                if(_context.Users.Any(u => u.Email == user.Register.Email))
                {
                    ModelState.AddModelError("Register.Email", "Already Registered? Please Log In.");
                    return Index();
                }
                PasswordHasher<User> Hasher = new PasswordHasher<User>();
                user.Register.Password = Hasher.HashPassword(user.Register, user.Register.Password);
                _context.Users.Add(user.Register);
                _context.SaveChanges();
                HttpContext.Session.SetInt32("UserId", user.Register.Id);
                return RedirectToAction("DivideLevelOne", "Fractions");
            }
            else
            {
            return Index();
            }
        }

        public IActionResult Login(LogRegWrapper user)
        {
            if(ModelState.IsValid)
            {
                User userInDb = _context.Users.FirstOrDefault(u => u.Email == user.Login.Email);
                if(userInDb == null)
                {
                    ModelState.AddModelError("Login.Email", "Invalid Email/Password");
                    return Index();
                }
                PasswordHasher<LogInUser> Hasher = new PasswordHasher<LogInUser>();
                PasswordVerificationResult Result = Hasher.VerifyHashedPassword(user.Login, userInDb.Password, user.Login.Password);
                if(Result == 0)
                {
                    ModelState.AddModelError("Login.Email", "Invalid Email/Password");
                    return Index();
                }
                HttpContext.Session.SetInt32("UserId", userInDb.Id);
                return RedirectToAction("DivideLevelOne", "Fractions");
            }
            else
            {
                return Index();
            }
        }
        public IActionResult Logout()
        {
        int? LoggedUser = HttpContext.Session.GetInt32("UserId");
        if(LoggedUser == null)
        {
            return RedirectToAction("Index");
        }
        HttpContext.Session.Clear();
        return RedirectToAction("Index");
        }
        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
