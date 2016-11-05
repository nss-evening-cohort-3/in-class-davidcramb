using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;
using BasicsOfForms.Models;
using BasicsOfForms.Controllers;

namespace BasicsOfForms.Controllers
{
    public class AngularApiController : ApiController
    {
        [System.Web.Http.HttpPost]
        public void Post([FromBody]dynamic form)
        {
            int i = 0;
             

        }
    }
}
