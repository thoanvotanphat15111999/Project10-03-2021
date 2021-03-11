using pjModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace pjDataAccess
{
    public class JobDAL : IFunctional<Job>
    {
        private readonly DataContext _context;
        public JobDAL(DataContext context)
        {
            _context = context;
        }
        Job IFunctional<Job>.add(Job Tmodel)
        {
            throw new NotImplementedException();
        }

        Job IFunctional<Job>.delete(Job Tmodel)
        {

            throw new NotImplementedException();
        }

        Job IFunctional<Job>.get(int id)
        {

            throw new NotImplementedException();
        }

        ICollection<Job> IFunctional<Job>.getall()
        {
            throw new NotImplementedException();
        }

        Job IFunctional<Job>.update(Job Tmodel)
        {
            throw new NotImplementedException();
        }
    }
}
