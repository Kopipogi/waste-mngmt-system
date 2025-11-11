import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Trash2,
  Recycle,
  Leaf,
  MapPin,
  Calendar,
  Clock,
  User,
  Bell,
  Menu,
  X,
  CheckCircle,
  AlertCircle,
  Truck,
  Award,
  BarChart3
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [pickupRequests, setPickupRequests] = useState([
    { id: 1, address: '123 Green St', date: '2023-06-15', time: '09:00 AM', status: 'scheduled', type: 'organic' },
    { id: 2, address: '456 Eco Ave', date: '2023-06-16', time: '02:00 PM', status: 'completed', type: 'recyclable' },
    { id: 3, address: '789 Nature Blvd', date: '2023-06-17', time: '10:00 AM', status: 'pending', type: 'mixed' }
  ]);

  const [stats, setStats] = useState({
    totalPickups: 128,
    recycled: 450,
    co2Saved: 1250
  });

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const requestPickup = () => {
    // Mock pickup request
    const newPickup = {
      id: pickupRequests.length + 1,
      address: 'New Pickup Address',
      date: '2023-06-18',
      time: '08:00 AM',
      status: 'pending',
      type: 'mixed'
    };
    setPickupRequests([newPickup, ...pickupRequests]);
  };

  // Mobile sidebar component
  const MobileSidebar = () => (
    <div className={`position-fixed top-0 start-0 h-100 bg-success text-white w-75 z-3 ${sidebarOpen ? 'd-block' : 'd-none'}`} style={{ zIndex: 1050 }}>
      <div className="p-3 border-bottom border-white border-opacity-25">
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="mb-0">EcoWaste</h4>
          <button className="btn text-white p-0" onClick={toggleSidebar}>
            <X size={24} />
          </button>
        </div>
      </div>
      <div className="p-3">
        <div className="d-flex align-items-center mb-3">
          <div className="bg-light bg-opacity-25 rounded-circle p-2 me-3">
            <User size={20} />
          </div>
          <div>
            <div className="fw-bold">John Doe</div>
            <div className="small opacity-75">john@example.com</div>
          </div>
        </div>
        <nav className="nav flex-column">
          {['home', 'schedule', 'tracking', 'rewards', 'stats'].map((tab) => (
            <button
              key={tab}
              className={`nav-link text-white text-start border-0 bg-transparent py-2 ${activeTab === tab ? 'fw-bold' : ''}`}
              onClick={() => {
                setActiveTab(tab);
                setSidebarOpen(false);
              }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );

  // Header component
  const Header = () => (
    <header className="bg-success text-white sticky-top shadow-sm">
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center py-3">
          <div className="d-flex align-items-center">
            <button className="btn text-white p-0 me-3 d-lg-none" onClick={toggleSidebar}>
              <Menu size={24} />
            </button>
            <div className="d-flex align-items-center">
              <Leaf size={28} className="me-2" />
              <h3 className="mb-0 fw-bold">EcoWaste</h3>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <button className="btn text-white position-relative p-0 me-3">
              <Bell size={20} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                3
              </span>
            </button>
            <div className="bg-light bg-opacity-25 rounded-circle p-2">
              <User size={20} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );

  // Home Tab
  const HomeTab = () => (
    <div className="container-fluid py-4">
      <div className="row mb-4">
        <div className="col-12">
          <div className="bg-success bg-opacity-10 rounded-4 p-4 text-center">
            <h2 className="fw-bold text-success mb-3">Green Waste Management</h2>
            <p className="mb-4">Help us create a cleaner, greener planet one pickup at a time</p>
            <button className="btn btn-success btn-lg px-4 py-2" onClick={requestPickup}>
              <Trash2 className="me-2" />
              Request Pickup
            </button>
          </div>
        </div>
      </div>

      <div className="row g-3 mb-4">
        <div className="col-md-4 col-6">
          <div className="bg-white rounded-3 p-3 shadow-sm h-100">
            <div className="d-flex align-items-center">
              <div className="bg-success bg-opacity-10 rounded-circle p-2 me-3">
                <Truck size={20} className="text-success" />
              </div>
              <div>
                <div className="small text-muted">Total Pickups</div>
                <div className="h5 fw-bold mb-0">{stats.totalPickups}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-6">
          <div className="bg-white rounded-3 p-3 shadow-sm h-100">
            <div className="d-flex align-items-center">
              <div className="bg-success bg-opacity-10 rounded-circle p-2 me-3">
                <Recycle size={20} className="text-success" />
              </div>
              <div>
                <div className="small text-muted">Kg Recycled</div>
                <div className="h5 fw-bold mb-0">{stats.recycled}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-6">
          <div className="bg-white rounded-3 p-3 shadow-sm h-100">
            <div className="d-flex align-items-center">
              <div className="bg-success bg-opacity-10 rounded-circle p-2 me-3">
                <Leaf size={20} className="text-success" />
              </div>
              <div>
                <div className="small text-muted">CO2 Saved (kg)</div>
                <div className="h5 fw-bold mb-0">{stats.co2Saved}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h4 className="fw-bold mb-3">Recent Pickups</h4>
          <div className="bg-white rounded-3 shadow-sm">
            {pickupRequests.slice(0, 3).map((pickup) => (
              <div key={pickup.id} className="border-bottom border-light p-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <div className="fw-bold">{pickup.address}</div>
                    <div className="small text-muted">
                      <Calendar size={14} className="me-1" />
                      {pickup.date} at {pickup.time}
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className={`badge ${pickup.status === 'completed' ? 'bg-success' : pickup.status === 'scheduled' ? 'bg-warning' : 'bg-secondary'}`}>
                      {pickup.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Schedule Tab
  const ScheduleTab = () => (
    <div className="container-fluid py-4">
      <div className="row mb-4">
        <div className="col-12">
          <h3 className="fw-bold text-success mb-3">Schedule Pickup</h3>
          <div className="bg-white rounded-3 p-4 shadow-sm">
            <form>
              <div className="mb-3">
                <label className="form-label fw-bold">Pickup Address</label>
                <input type="text" className="form-control form-control-lg" placeholder="Enter your address" />
              </div>
              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <label className="form-label fw-bold">Date</label>
                  <input type="date" className="form-control form-control-lg" />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-bold">Time</label>
                  <input type="time" className="form-control form-control-lg" />
                </div>
              </div>
              <div className="mb-4">
                <label className="form-label fw-bold">Waste Type</label>
                <select className="form-select form-select-lg">
                  <option>Organic Waste</option>
                  <option>Recyclable Materials</option>
                  <option>Mixed Waste</option>
                  <option>Hazardous Waste</option>
                </select>
              </div>
              <button className="btn btn-success btn-lg w-100 py-3">
                <CheckCircle className="me-2" />
                Confirm Pickup
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h4 className="fw-bold mb-3">Upcoming Pickups</h4>
          <div className="bg-white rounded-3 shadow-sm">
            {pickupRequests.filter(p => p.status !== 'completed').map((pickup) => (
              <div key={pickup.id} className="border-bottom border-light p-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <div className="fw-bold">{pickup.address}</div>
                    <div className="small text-muted">
                      <Calendar size={14} className="me-1" />
                      {pickup.date} at {pickup.time}
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className={`badge ${pickup.status === 'scheduled' ? 'bg-warning' : 'bg-secondary'}`}>
                      {pickup.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Tracking Tab
  const TrackingTab = () => (
    <div className="container-fluid py-4">
      <div className="row mb-4">
        <div className="col-12">
          <h3 className="fw-bold text-success mb-3">Track Your Pickup</h3>
          <div className="bg-white rounded-3 p-4 shadow-sm text-center">
            <div className="mb-4">
              <div className="bg-success bg-opacity-10 rounded-circle p-4 d-inline-block mb-3">
                <Truck size={48} className="text-success" />
              </div>
              <h4 className="fw-bold">Truck is on the way</h4>
              <p className="text-muted">Estimated arrival: 25 minutes</p>
            </div>
            <div className="progress mb-4" style={{ height: '10px' }}>
              <div className="progress-bar bg-success" style={{ width: '65%' }}></div>
            </div>
            <div className="d-flex justify-content-between text-muted small">
              <span>Preparing</span>
              <span>On the way</span>
              <span>Arriving</span>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h4 className="fw-bold mb-3">Pickup History</h4>
          <div className="bg-white rounded-3 shadow-sm">
            {pickupRequests.filter(p => p.status === 'completed').map((pickup) => (
              <div key={pickup.id} className="border-bottom border-light p-3">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <div className="fw-bold">{pickup.address}</div>
                    <div className="small text-muted">
                      <Calendar size={14} className="me-1" />
                      {pickup.date} at {pickup.time}
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="badge bg-success">Completed</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Rewards Tab
  const RewardsTab = () => (
    <div className="container-fluid py-4">
      <div className="row mb-4">
        <div className="col-12">
          <h3 className="fw-bold text-success mb-3">Eco Rewards</h3>
          <div className="bg-success bg-opacity-10 rounded-4 p-4 text-center mb-4">
            <Award size={48} className="text-success mb-3" />
            <h2 className="fw-bold text-success">1,250 Points</h2>
            <p className="mb-0">Redeem your eco-points for amazing rewards!</p>
          </div>
        </div>
      </div>

      <div className="row g-3 mb-4">
        <div className="col-6">
          <div className="bg-white rounded-3 p-3 shadow-sm h-100 text-center">
            <div className="bg-success bg-opacity-10 rounded-circle p-3 d-inline-block mb-3">
              <Leaf size={24} className="text-success" />
            </div>
            <h5 className="fw-bold">Plant a Tree</h5>
            <p className="small text-muted">500 points</p>
            <button className="btn btn-outline-success btn-sm w-100">Redeem</button>
          </div>
        </div>
        <div className="col-6">
          <div className="bg-white rounded-3 p-3 shadow-sm h-100 text-center">
            <div className="bg-success bg-opacity-10 rounded-circle p-3 d-inline-block mb-3">
              <Recycle size={24} className="text-success" />
            </div>
            <h5 className="fw-bold">Recycling Kit</h5>
            <p className="small text-muted">300 points</p>
            <button className="btn btn-outline-success btn-sm w-100">Redeem</button>
          </div>
        </div>
        <div className="col-6">
          <div className="bg-white rounded-3 p-3 shadow-sm h-100 text-center">
            <div className="bg-success bg-opacity-10 rounded-circle p-3 d-inline-block mb-3">
              <Trash2 size={24} className="text-success" />
            </div>
            <h5 className="fw-bold">Waste Bags</h5>
            <p className="small text-muted">200 points</p>
            <button className="btn btn-outline-success btn-sm w-100">Redeem</button>
          </div>
        </div>
        <div className="col-6">
          <div className="bg-white rounded-3 p-3 shadow-sm h-100 text-center">
            <div className="bg-success bg-opacity-10 rounded-circle p-3 d-inline-block mb-3">
              <BarChart3 size={24} className="text-success" />
            </div>
            <h5 className="fw-bold">Eco Report</h5>
            <p className="small text-muted">150 points</p>
            <button className="btn btn-outline-success btn-sm w-100">Redeem</button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h4 className="fw-bold mb-3">Recent Achievements</h4>
          <div className="bg-white rounded-3 shadow-sm p-3">
            <div className="d-flex align-items-center mb-3">
              <div className="bg-success bg-opacity-10 rounded-circle p-2 me-3">
                <CheckCircle size={20} className="text-success" />
              </div>
              <div>
                <div className="fw-bold">Eco Warrior</div>
                <div className="small text-muted">Completed 10 pickups</div>
              </div>
            </div>
            <div className="d-flex align-items-center mb-3">
              <div className="bg-success bg-opacity-10 rounded-circle p-2 me-3">
                <Leaf size={20} className="text-success" />
              </div>
              <div>
                <div className="fw-bold">Green Champion</div>
                <div className="small text-muted">Recycled 100kg of waste</div>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div className="bg-success bg-opacity-10 rounded-circle p-2 me-3">
                <Award size={20} className="text-success" />
              </div>
              <div>
                <div className="fw-bold">Planet Protector</div>
                <div className="small text-muted">Saved 500kg of CO2</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Stats Tab
  const StatsTab = () => (
    <div className="container-fluid py-4">
      <div className="row mb-4">
        <div className="col-12">
          <h3 className="fw-bold text-success mb-3">Environmental Impact</h3>
          <div className="row g-3">
            <div className="col-6">
              <div className="bg-white rounded-3 p-3 shadow-sm h-100 text-center">
                <div className="display-6 fw-bold text-success">{stats.totalPickups}</div>
                <div className="small text-muted">Total Pickups</div>
              </div>
            </div>
            <div className="col-6">
              <div className="bg-white rounded-3 p-3 shadow-sm h-100 text-center">
                <div className="display-6 fw-bold text-success">{stats.recycled}kg</div>
                <div className="small text-muted">Waste Recycled</div>
              </div>
            </div>
            <div className="col-6">
              <div className="bg-white rounded-3 p-3 shadow-sm h-100 text-center">
                <div className="display-6 fw-bold text-success">{stats.co2Saved}kg</div>
                <div className="small text-muted">CO2 Saved</div>
              </div>
            </div>
            <div className="col-6">
              <div className="bg-white rounded-3 p-3 shadow-sm h-100 text-center">
                <div className="display-6 fw-bold text-success">12</div>
                <div className="small text-muted">Trees Planted</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-12">
          <div className="bg-white rounded-3 p-4 shadow-sm">
            <h5 className="fw-bold mb-3">Monthly Impact</h5>
            <div className="progress-stacked mb-3">
              <div className="progress" role="progressbar" style={{ width: '40%' }}>
                <div className="progress-bar bg-success">Organic</div>
              </div>
              <div className="progress" role="progressbar" style={{ width: '30%' }}>
                <div className="progress-bar bg-warning">Recyclable</div>
              </div>
              <div className="progress" role="progressbar" style={{ width: '20%' }}>
                <div className="progress-bar bg-info">Mixed</div>
              </div>
              <div className="progress" role="progressbar" style={{ width: '10%' }}>
                <div className="progress-bar bg-secondary">Hazardous</div>
              </div>
            </div>
            <div className="d-flex justify-content-between small text-muted">
              <span>Organic (40%)</span>
              <span>Recyclable (30%)</span>
              <span>Mixed (20%)</span>
              <span>Hazardous (10%)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="bg-white rounded-3 p-4 shadow-sm">
            <h5 className="fw-bold mb-3">Tips for Better Recycling</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <div className="d-flex align-items-center">
                  <CheckCircle size={16} className="text-success me-2" />
                  <span>Rinse containers before recycling</span>
                </div>
              </li>
              <li className="mb-2">
                <div className="d-flex align-items-center">
                  <CheckCircle size={16} className="text-success me-2" />
                  <span>Separate organic waste from other materials</span>
                </div>
              </li>
              <li className="mb-2">
                <div className="d-flex align-items-center">
                  <CheckCircle size={16} className="text-success me-2" />
                  <span>Use designated bins for different waste types</span>
                </div>
              </li>
              <li>
                <div className="d-flex align-items-center">
                  <CheckCircle size={16} className="text-success me-2" />
                  <span>Compost organic waste at home when possible</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  // Navigation component
  const Navigation = () => (
    <nav className="bg-white border-top fixed-bottom d-lg-none">
      <div className="d-flex justify-content-around py-2">
        {[
          { id: 'home', icon: Leaf, label: 'Home' },
          { id: 'schedule', icon: Calendar, label: 'Schedule' },
          { id: 'tracking', icon: Truck, label: 'Track' },
          { id: 'rewards', icon: Award, label: 'Rewards' },
          { id: 'stats', icon: BarChart3, label: 'Stats' }
        ].map((item) => (
          <button
            key={item.id}
            className={`nav-link border-0 bg-transparent p-2 text-center ${activeTab === item.id ? 'text-success' : 'text-muted'}`}
            onClick={() => setActiveTab(item.id)}
          >
            <item.icon size={20} className="d-block mx-auto mb-1" />
            <small className="d-block">{item.label}</small>
          </button>
        ))}
      </div>
    </nav>
  );

  // Desktop sidebar
  const DesktopSidebar = () => (
    <div className="d-none d-lg-block bg-success text-white vh-100 position-fixed" style={{ width: '250px' }}>
      <div className="p-4 border-bottom border-white border-opacity-25">
        <div className="d-flex align-items-center">
          <Leaf size={28} className="me-2" />
          <h3 className="mb-0 fw-bold">EcoWaste</h3>
        </div>
      </div>
      <div className="p-3">
        <div className="d-flex align-items-center mb-4">
          <div className="bg-light bg-opacity-25 rounded-circle p-2 me-3">
            <User size={20} />
          </div>
          <div>
            <div className="fw-bold">John Doe</div>
            <div className="small opacity-75">john@example.com</div>
          </div>
        </div>
        <nav className="nav flex-column">
          {[
            { id: 'home', icon: Leaf, label: 'Dashboard' },
            { id: 'schedule', icon: Calendar, label: 'Schedule' },
            { id: 'tracking', icon: Truck, label: 'Tracking' },
            { id: 'rewards', icon: Award, label: 'Rewards' },
            { id: 'stats', icon: BarChart3, label: 'Statistics' }
          ].map((item) => (
            <button
              key={item.id}
              className={`nav-link text-white d-flex align-items-center mb-2 ${activeTab === item.id ? 'bg-white bg-opacity-25' : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              <item.icon size={18} className="me-3" />
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'home': return <HomeTab />;
      case 'schedule': return <ScheduleTab />;
      case 'tracking': return <TrackingTab />;
      case 'rewards': return <RewardsTab />;
      case 'stats': return <StatsTab />;
      default: return <HomeTab />;
    }
  };

  return (
    <div className="App">
      <MobileSidebar />
      <DesktopSidebar />

      <div className={sidebarOpen ? 'modal-backdrop show' : ''} onClick={toggleSidebar}></div>

      <div className="d-flex" style={{ width: '100%' }}>
        <div className="d-none d-lg-block" style={{ width: '250px' }}></div>
        <div className="flex-grow-1">
          <Header />
          <main className={activeTab === 'home' ? '' : 'pb-5 pb-lg-0'}>
            {renderActiveTab()}
          </main>
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default App;