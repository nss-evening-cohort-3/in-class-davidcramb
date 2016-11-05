using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;

namespace BasicsOfForms.Controllers
{
    public class AngularApiController : ApiController
    {

        public void Post([FromBody]dynamic form)
        {
            int i = 0;
            return form;

        }
    }
}
