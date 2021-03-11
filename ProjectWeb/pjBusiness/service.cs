using pjModels;
using System;
using pjDataAccess;
using System.Collections.Generic;

namespace pjBusiness
{
    public class service
    {
        private ProjectDAL pdal;
        private JobDAL jdal;

        public service(DataContext _context)
        {
            pdal = new ProjectDAL(_context);
            jdal = new JobDAL(_context);
        }
        // PROJECT Manager
        public ICollection<Project> GetallProject()
        {
            try
            {
                ICollection<Project> listp = pdal.getall();
                return listp;
            }
            catch (Exception e)
            {

                throw e;
            }
        }
        public Project addProject(Project project)
        {
            try
            {
                pdal.add(project);
                Project newproject = pdal.get(project.ProjectId);
                if (newproject != null)
                {
                    return newproject;
                }
                return null;
            }
            catch (Exception e)
            {

                throw e;
            }

        }
        public Project deleteproject(int id)
        {
            try
            {
                Project Iproject = pdal.get(id);
                if (Iproject != null)
                {
                    pdal.delete(Iproject);
                    return Iproject;
                }
                return null;
            }
            catch (Exception e)
            {

                throw e;
            }
        }
         public  Project updateproject(Project project)
        {
                 Project newproject = pdal.update(project);
                   return newproject;  
        }

        public Project GetByIdProject( int id)
        {
            try
            {
                Project project = pdal.get(id);
                if (project != null)
                {
                    return project;
                }
                return null;
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        // Job Manager

        public ICollection<Job> getallJob()
        {
            try
            {
                ICollection<Job> listjob = jdal.getall();
                return listjob;
            }
            catch (Exception e)
            {

                throw e;
            }
        }
        public Job addJob(Job job)
        {
            try
            {
               jdal.add(job);
               Job  newJob = jdal.get(job.JobId);
                if (newJob != null)
                {
                    return newJob;
                }
                return null;
                
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public Job getJob(int id)
        {
            try
            {
                Job job = jdal.get(id);
                return job;
            }
            catch (Exception e)
            {

                throw e;
            }
        }
        public Job deleteJob(int id)
        {
            try
            {
                Job Ijob = jdal.get(id);
                if (Ijob != null)
                {
                    jdal.delete(Ijob);
                    return Ijob;
                }
                return null;
            }
            catch (Exception e)
            {

                throw e;
            }
        }

        public Job updatejob(Job job)
        {
            try
            {
                //Job newjob = jdal.get(id);
                //if (newjob != null)
                //{
                //    jdal.update1(newjob,job);
                //    return job;
                //}
                //return null;
                Job newjob = jdal.update(job);
                return newjob;
            }
            catch (Exception e)
            {

                throw e;
            }

        }

    }
 
}
