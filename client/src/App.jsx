import { ArrowUpRight, Bell, CalendarDays, CheckCircle2, Circle, Clock3, FolderKanban, LayoutDashboard, ListTodo, Plus, Search, Settings, Users } from "lucide-react";

const projects = [
  { name: "Website redesign", team: "Design team", progress: 72, tone: "violet", due: "Nov 28" },
  { name: "Mobile app launch", team: "Product team", progress: 46, tone: "blue", due: "Dec 04" },
  { name: "Customer research", team: "Growth team", progress: 88, tone: "green", due: "Dec 01" },
];

const tasks = [
  { title: "Review homepage wireframes", project: "Website redesign", date: "Today", done: false, tag: "High" },
  { title: "Share sprint update with team", project: "Mobile app launch", date: "Today", done: false, tag: "Medium" },
  { title: "Finalise interview questions", project: "Customer research", date: "Tomorrow", done: true, tag: "Low" },
];

function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <a className="brand" href="#"><span className="brand-mark">W</span><span>work<span className="brand-light">sphere</span></span></a>
        <div className="workspace-label">WORKSPACE</div>
        <nav>
          <a className="nav-item active"><LayoutDashboard size={18}/> Overview</a>
          <a className="nav-item"><FolderKanban size={18}/> Projects <span className="nav-count">3</span></a>
          <a className="nav-item"><ListTodo size={18}/> My tasks</a>
          <a className="nav-item"><Users size={18}/> Team</a>
          <a className="nav-item"><CalendarDays size={18}/> Calendar</a>
        </nav>
        <div className="sidebar-bottom">
          <a className="nav-item"><Settings size={18}/> Settings</a>
          <div className="profile"><div className="avatar">KJ</div><div><strong>Khushi Jha</strong><small>Workspace owner</small></div><span className="dots">···</span></div>
        </div>
      </aside>
      <main className="main">
        <header className="topbar"><div className="crumb">Workspace <span>/</span> Overview</div><div className="top-actions"><button className="icon-btn" aria-label="Search"><Search size={18}/></button><button className="icon-btn" aria-label="Notifications"><Bell size={18}/></button><div className="avatar small">KJ</div></div></header>
        <section className="content">
          <div className="welcome-row"><div><p className="eyebrow">MONDAY, NOVEMBER 23</p><h1>Good afternoon, Khushi <span>✦</span></h1><p className="subtext">Here's what's happening across your workspace.</p></div><button className="primary-btn"><Plus size={17}/> New project</button></div>
          <div className="stats-grid">
            <div className="stat-card"><div className="stat-top"><span>Active projects</span><FolderKanban size={18}/></div><strong>03</strong><small>Across your workspace</small></div>
            <div className="stat-card"><div className="stat-top"><span>Open tasks</span><ListTodo size={18}/></div><strong>12</strong><small>4 due this week</small></div>
            <div className="stat-card"><div className="stat-top"><span>Completed</span><CheckCircle2 size={18}/></div><strong>28</strong><small>This month</small></div>
            <div className="stat-card"><div className="stat-top"><span>Team members</span><Users size={18}/></div><strong>08</strong><small>Across 3 projects</small></div>
          </div>
          <div className="section-heading"><div><h2>Your projects</h2><p>Keep an eye on the work in progress.</p></div><a href="#">View all <ArrowUpRight size={15}/></a></div>
          <div className="project-grid">{projects.map((p) => <article className="project-card" key={p.name}><div className="project-title"><span className={`project-icon ${p.tone}`}><FolderKanban size={18}/></span><button className="dots">···</button></div><h3>{p.name}</h3><p>{p.team}</p><div className="progress-meta"><span>Progress</span><strong>{p.progress}%</strong></div><div className="progress-track"><span className={p.tone} style={{width:p.progress+"%"}}/></div><div className="project-foot"><span><Clock3 size={14}/> Due {p.due}</span><span className="mini-avatars"><i>K</i><i>A</i><i>R</i></span></div></article>)}</div>
          <div className="section-heading task-heading"><div><h2>My tasks</h2><p>A quick look at what needs your attention.</p></div><a href="#">Open task board <ArrowUpRight size={15}/></a></div>
          <div className="task-list">{tasks.map((t) => <div className="task-row" key={t.title}><span className={t.done ? "task-check done":"task-check"}>{t.done ? <CheckCircle2 size={19}/>:<Circle size={19}/>}</span><div className="task-title"><strong className={t.done?"completed":""}>{t.title}</strong><small>{t.project}</small></div><span className={`priority ${t.tag.toLowerCase()}`}>{t.tag}</span><span className="task-date">{t.date}</span></div>)}</div>
          <p className="demo-note">Preview interface · Sample data only · Backend integration is not connected yet</p>
        </section>
      </main>
    </div>
  );
}
export default App;
