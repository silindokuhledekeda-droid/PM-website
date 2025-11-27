import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, TrendingUp, Users } from "lucide-react";

const Index = () => {
  const newsItems = [
    {
      title: "New Project Dashboard Features",
      date: "March 15, 2024",
      description: "Enhanced filtering and sorting capabilities now available for all users.",
    },
    {
      title: "Q1 Performance Review",
      date: "March 10, 2024",
      description: "Outstanding results across all active projects with 95% on-time delivery.",
    },
    {
      title: "Team Expansion Announcement",
      date: "March 5, 2024",
      description: "Welcome to our new project managers joining the CAPACITI team.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <Hero />

        {/* Client News Section */}
        <section className="py-16 px-4 bg-card/50">
          <div className="container mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Bell className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-bold">Client News & Updates</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsItems.map((item, index) => (
                <Card key={index} className="hover:shadow-elegant-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{item.date}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Project Tracking</h3>
                <p className="text-muted-foreground">
                  Real-time monitoring of project progress with comprehensive status indicators and milestone tracking.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Team Collaboration</h3>
                <p className="text-muted-foreground">
                  Seamless collaboration tools for teams to work together efficiently on shared projects.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Bell className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Smart Notifications</h3>
                <p className="text-muted-foreground">
                  Stay informed with intelligent alerts for project updates, deadlines, and team activities.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
