using System;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Linq;
using learning.LogMvcDemo.Codes.Entitys;

namespace learning.LogMvcDemo.Migrations
{
    internal sealed class Configuration : DbMigrationsConfiguration<learning.LogMvcDemo.Codes.Entitys.AppDataContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
            AutomaticMigrationDataLossAllowed = false;
        }

        protected override void Seed(learning.LogMvcDemo.Codes.Entitys.AppDataContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data.
            context.Set<ApplicationEntity>().AddOrUpdate(c => c.Id, new ApplicationEntity()
            {
                Enable = true,
                Name = "����Ӧ�ò�Ҫɾ",
                ValidDateTime = DateTime.Now.AddYears(100),
                Appsecret = Guid.NewGuid().ToString("N")
            });
        }
    }
}
