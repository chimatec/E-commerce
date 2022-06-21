using System.Runtime.InteropServices;
using System.IO.Pipes;
using System.Net.Mime;
using System.ComponentModel.Design.Serialization;
using System.Threading;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using Microsoft.AspNetCore.Mvc;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class ProductsController : ControllerBase
    {
        private readonly StoreContext _context;
       
        public ProductsController(StoreContext context)
        {
            _context = context;
      
           
        }
        
        [HttpGet]
        public async Task<ActionResult<List<Products>>> GetProducts()
        {
            return await _context.Product.ToListAsync();


        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Products>> GetProduct(int id)
        {
            return await _context.Product.FindAsync(id);
        }
        
    }
}