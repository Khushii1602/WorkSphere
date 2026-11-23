import { useMemo, useState } from "react";
import { ArrowLeft, ArrowUpRight, Bell, CalendarDays, CheckCircle2, Circle, Clock3, FolderKanban, LayoutDashboard, ListTodo, Plus, Search, Settings, Users, X } from "lucide-react";

const initialProjects = [
  { id: 1, name: "Website redesign", team: "Design team", progress: 72, tone: "violet", due: "Nov 28" },
  { id: 2, name: "Mobile app launch", team: "Product team", progress: 46, tone: "blue", due: "Dec 04" },
  { id: 3, name: "Customer research", team: "Growth team", progress: 88, tone: "green", due: "Dec 01" },
];
const initialTasks = [
  { id: 1, title: "Review homepage wireframes", project: "Website redesign", date: "Today", done: false, tag: "High" },
  { id: 2, title: "Share sprint update with team", project: "Mobile app launch", date: "Today", done: false, tag: "Medium" },
  { id: 3, title: "Finalise interview questions", project: "Customer research", date: "Tomorrow", done: true, tag: "Low" },
];
const navItems = [
  { label: "Overview", icon: LayoutDashboard },
  { label: "Projects", icon: FolderKanban },
  { label: "My tasks", icon: ListTodo },
  { label: "Team", icon: Users },
  { label: "Calendar", icon: CalendarDays },
];

function App() {
  const [page, setPage] = useState("Overview");
  const [projects, setProjects] = useState(initialProjects);
  const [tasks, setTasks] = useState(initialTasks);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projectTeam, setProjectTeam] = useState("");
  const [search, setSearch] = useState("");

  const openTasks = tasks.filter(t => !t.done).length;
  const completedTasks = tasks.filter(t => t.done).length;
  const filteredProjects = useMemo(() => projects.filter(p => p.name.toLowerCase().includes(search.toLowerCase())), [projects, search]);
  const filteredTasks = useMemo(() => tasks.filter(t => (t.title + " " + t.project).toLowerCase().includes(search.toLowerCase())), [tasks, search]);

  function addProject(event) {
    event.preventDefault();
    if (!projectName.trim()) return;
    setProjects(current => [...current, { id: Date.now(), name: projectName.trim(), team: projectTeam.trim() || "New team", progress: 0, tone: "violet", due: "Not set" }]);
    setProjectName("");
    setProjectTeam("");
    setShowProjectForm(false);
    setPage("Projects");
  }
  function toggleTask(id) {
    setTasks(current => current.map(task => task.id === id ? { ...task, done: !task.done } : task));
  }

  const pageTitle = page === "My tasks" ? "My tasks" : page;
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <a className="brand" href="#" onClick={e => {e.preventDefault(); setPage("Overview");}}><span className="brand-mark">W</span><span>work<span className="brand-light">sphere</span></span></a>
        <div className="workspace-label">WORKSPACE</div>
        <nav>{navItems.map(({label, icon: Icon}) => <button key={label} className={`nav-item nav-button ${page === label ? "active" : ""}`} onClick={() => {setPage(label); setSearch("");}}><Icon size={18}/>{label}{label === "Projects" && <span className="nav-count">{projects.length}</span>}{label === "My tasks" && <span className="nav-count">{openTasks}</span>}</button>)}</nav>
        <div className="sidebar-bottom">
          <button className={`nav-item nav-button ${page === "Settings" ? "active" : ""}`} onClick={() => setPage("Settings")}><Settings size={18}/> Settings</button>
          <div className="profile"><div className="avatar">KJ</div><div><strong>Khushi Jha</strong><small>Workspace owner</small></div><span className="dots">···</span></div>
        </div>
      </aside>
      <main className="main">
        <header className="topbar"><div className="crumb">Workspace <span>/</span> {pageTitle}</div><div className="top-actions"><label className="header-search"><Search size={16}/><input aria-label="Search workspace" placeholder="Search" value={search} onChange={e => setSearch(e.target.value)}/></label><button className="icon-btn" aria-label="Notifications" onClick={() => alert("You're all caught up!") }><Bell size={18}/></button><div className="avatar small">KJ</div></div></header>
        <section className="content">
          {page === "Overview" && <>
            <div className="welcome-row"><div><p className="eyebrow">YOUR WORKSPACE</p><h1>Good afternoon, Khushi <span>✦</span></h1><p className="subtext">Here's what's happening across your workspace.</p></div><button className="primary-btn" onClick={() => setShowProjectForm(true)}><Plus size={17}/> New project</button></div>
            <div className="stats-grid">
              <div className="stat-card"><div className="stat-top"><span>Active projects</span><FolderKanban size={18}/></div><strong>{String(projects.length).padStart(2,"0")}</strong><small>Across your workspace</small></div>
              <div className="stat-card"><div className="stat-top"><span>Open tasks</span><ListTodo size={18}/></div><strong>{String(openTasks).padStart(2,"0")}</strong><small>Needs your attention</small></div>
              <div className="stat-card"><div className="stat-top"><span>Completed</span><CheckCircle2 size={18}/></div><strong>{String(completedTasks).padStart(2,"0")}</strong><small>In this task list</small></div>
              <div className="stat-card"><div className="stat-top"><span>Team members</span><Users size={18}/></div><strong>08</strong><small>Sample workspace data</small></div>
            </div>
            <div className="section-heading"><div><h2>Your projects</h2><p>Keep an eye on the work in progress.</p></div><button className="text-action" onClick={() => setPage("Projects")}>View all <ArrowUpRight size={15}/></button></div>
            <ProjectGrid projects={projects.slice(0,3)} />
            <div className="section-heading task-heading"><div><h2>My tasks</h2><p>A quick look at what needs your attention.</p></div><button className="text-action" onClick={() => setPage("My tasks")}>Open task board <ArrowUpRight size={15}/></button></div>
            <TaskList tasks={tasks.slice(0,3)} onToggle={toggleTask}/>
          </>}
          {page === "Projects" && <><PageHeading title="Projects" subtitle="Create and track work across your workspace." action={<button className="primary-btn" onClick={() => setShowProjectForm(true)}><Plus size={17}/> New project</button>}/>{filteredProjects.length ? <ProjectGrid projects={filteredProjects}/> : <EmptyState text="No projects match your search."/>}</>}
          {page === "My tasks" && <><PageHeading title="My tasks" subtitle="Track your tasks and update their status."/><TaskList tasks={filteredTasks} onToggle={toggleTask}/></>}
          {page === "Team" && <><PageHeading title="Team" subtitle="People collaborating in this sample workspace."/><div className="simple-grid">{[["KJ","Khushi Jha","Workspace owner"],["AM","Aarav Mehta","Product team"],["RS","Riya Sharma","Design team"],["PK","Priya Kapoor","Growth team"]].map(m=><div className="simple-card" key={m[0]}><div className="avatar">{m[0]}</div><div><strong>{m[1]}</strong><small>{m[2]}</small></div><span className="member-status">Active</span></div>)}</div><p className="demo-note">Sample team members · Invitations and permissions are not connected yet.</p></>}
          {page === "Calendar" && <><PageHeading title="Calendar" subtitle="Upcoming project deadlines from the sample workspace."/><div className="task-list">{projects.map(p=><div className="task-row" key={p.id}><span className={`project-icon ${p.tone}`}><CalendarDays size={17}/></span><div className="task-title"><strong>{p.name}</strong><small>{p.team}</small></div><span className="task-date">Due {p.due}</span></div>)}</div></>}
          {page === "Settings" && <><PageHeading title="Settings" subtitle="Workspace preferences."/><div className="simple-card settings-card"><div><strong>Workspace name</strong><small>WorkSphere</small></div><span className="member-status">Demo setting</span></div><p className="demo-note">Settings will become editable when user accounts and workspace APIs are implemented.</p></>}
          <p className="demo-note">Interactive frontend preview · Changes are held in React state and reset on refresh · Backend persistence is not connected yet</p>
        </section>
      </main>
      {showProjectForm && <div className="modal-backdrop" onMouseDown={e => {if(e.target === e.currentTarget) setShowProjectForm(false);}}><form className="project-modal" onSubmit={addProject}><div className="modal-head"><div><h2>Create a project</h2><p>Add a project to your workspace.</p></div><button type="button" className="icon-btn" aria-label="Close" onClick={() => setShowProjectForm(false)}><X size={19}/></button></div><label>Project name<input autoFocus value={projectName} onChange={e => setProjectName(e.target.value)} placeholder="e.g. Website launch" required/></label><label>Team or department<input value={projectTeam} onChange={e => setProjectTeam(e.target.value)} placeholder="e.g. Design team"/></label><div className="modal-actions"><button type="button" className="secondary-btn" onClick={() => setShowProjectForm(false)}>Cancel</button><button className="primary-btn" type="submit">Create project</button></div></form></div>}
    </div>
  );
}

function PageHeading({title, subtitle, action}) {
  return <div className="welcome-row"><div><p className="eyebrow">WORKSPACE</p><h1>{title}</h1><p className="subtext">{subtitle}</p></div>{action}</div>;
}
function ProjectGrid({projects}) {
  if (!projects.length) return <EmptyState text="No projects yet. Create your first project to get started."/>;
  return <div className="project-grid">{projects.map(p=><article className="project-card" key={p.id}><div className="project-title"><span className={`project-icon ${p.tone}`}><FolderKanban size={18}/></span><span className="project-menu-label">PROJECT</span></div><h3>{p.name}</h3><p>{p.team}</p><div className="progress-meta"><span>Progress</span><strong>{p.progress}%</strong></div><div className="progress-track"><span className={p.tone} style={{width:p.progress+"%"}}/></div><div className="project-foot"><span><Clock3 size={14}/> {p.due === "Not set" ? "No due date" : "Due "+p.due}</span></div></article>)}</div>;
}
function TaskList({tasks,onToggle}) {
  if (!tasks.length) return <EmptyState text="No tasks found."/>;
  return <div className="task-list">{tasks.map(t=><div className="task-row" key={t.id}><button className={t.done?"task-check done":"task-check"} aria-label={t.done?"Mark as open":"Mark as complete"} onClick={()=>onToggle(t.id)}>{t.done?<CheckCircle2 size={20}/>:<Circle size={20}/>}</button><div className="task-title"><strong className={t.done?"completed":""}>{t.title}</strong><small>{t.project}</small></div><span className={`priority ${t.tag.toLowerCase()}`}>{t.tag}</span><span className="task-date">{t.date}</span></div>)}</div>;
}
function EmptyState({text}) { return <div className="empty-state"><FolderKanban size={25}/><p>{text}</p></div>; }
export default App;
