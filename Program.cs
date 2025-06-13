var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Serve index.html and other static files
app.UseDefaultFiles();
app.UseStaticFiles();

app.Run();
