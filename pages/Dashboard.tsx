
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend, Cell, PieChart, Pie } from 'recharts';
import { TrendingUp, Users, DollarSign, MousePointer2, Percent, ArrowUpRight } from 'lucide-react';

const Dashboard: React.FC = () => {
  const performanceData = [
    { name: 'Month 1', revenue: 12000, spend: 3000, leads: 150 },
    { name: 'Month 2', revenue: 19000, spend: 4000, leads: 280 },
    { name: 'Month 3', revenue: 35000, spend: 6500, leads: 520 },
    { name: 'Month 4', revenue: 52000, spend: 9000, leads: 840 },
    { name: 'Month 5', revenue: 84000, spend: 12000, leads: 1250 },
    { name: 'Month 6', revenue: 124000, spend: 18000, leads: 1900 },
  ];

  const channelData = [
    { name: 'Meta Ads', value: 55, color: '#3b82f6' },
    { name: 'Google Ads', value: 25, color: '#10b981' },
    { name: 'Email/SMS', value: 15, color: '#f59e0b' },
    { name: 'Direct', value: 5, color: '#8b5cf6' },
  ];

  const stats = [
    { label: "Total Managed Spend", value: "$4.2M+", icon: <DollarSign size={20} className="text-brand-accent"/> },
    { label: "Avg. ROI Achieved", value: "385%", icon: <TrendingUp size={20} className="text-brand-secondary"/> },
    { label: "Qualified Leads", value: "125k+", icon: <Users size={20} className="text-blue-400"/> },
    { label: "Conversion Rate", value: "4.2%", icon: <Percent size={20} className="text-orange-400"/> },
  ];

  return (
    <div className="py-24 px-6 bg-[#030303]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h1 className="text-5xl md:text-7xl font-black font-display mb-4">Live Performance <br /><span className="text-gradient">Transparency.</span></h1>
            <p className="text-gray-400 text-lg">Interactive representation of aggregate performance across my managed portfolios.</p>
          </div>
          <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
            <div className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse"></div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Real-Time Data Feed</span>
          </div>
        </div>

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((s, i) => (
            <div key={i} className="glass-card p-8 rounded-3xl border-white/5 relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 opacity-5 group-hover:scale-150 transition-transform">
                {/* Fix: Use ReactElement<any> to resolve TypeScript error when overriding props like 'size' on Lucide icons via cloneElement */}
                {React.cloneElement(s.icon as React.ReactElement<any>, { size: 100 })}
              </div>
              <div className="p-3 bg-white/5 rounded-xl w-fit mb-4">{s.icon}</div>
              <div className="text-3xl font-black text-white mb-1 tracking-tight">{s.value}</div>
              <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Main Chart Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 glass-card p-8 rounded-[2.5rem] border-white/5 h-[500px]">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-xl font-bold">Growth Velocity (Revenue vs Spend)</h3>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                   <div className="w-3 h-3 rounded-full bg-brand-accent"></div>
                   <span className="text-xs text-gray-400">Revenue</span>
                </div>
                <div className="flex items-center gap-2">
                   <div className="w-3 h-3 rounded-full bg-brand-secondary"></div>
                   <span className="text-xs text-gray-400">Spend</span>
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performanceData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorSpend" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                <XAxis dataKey="name" stroke="#555" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#555" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value/1000}k`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '12px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={4} fillOpacity={1} fill="url(#colorRevenue)" />
                <Area type="monotone" dataKey="spend" stroke="#10b981" strokeWidth={4} fillOpacity={1} fill="url(#colorSpend)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="glass-card p-8 rounded-[2.5rem] border-white/5 flex flex-col">
            <h3 className="text-xl font-bold mb-10">Conversion Channels</h3>
            <div className="flex-grow flex items-center justify-center">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={channelData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {channelData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#111', border: 'none', borderRadius: '8px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-4 mt-8">
              {channelData.map((item, i) => (
                <div key={i} className="flex justify-between items-center p-3 rounded-xl bg-white/5">
                   <div className="flex items-center gap-3">
                     <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                     <span className="text-sm font-medium text-gray-300">{item.name}</span>
                   </div>
                   <span className="text-sm font-bold text-white">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 glass-card p-10 rounded-[2.5rem] border-brand-accent/30 flex flex-col md:flex-row justify-between items-center">
           <div>
              <h2 className="text-2xl font-black mb-2 italic">Scaling is a science, not a mystery.</h2>
              <p className="text-gray-400">Want to see how your specific numbers could look with a optimized growth engine?</p>
           </div>
           <button className="mt-6 md:mt-0 bg-white text-black px-8 py-4 rounded-full font-black flex items-center gap-2 hover:scale-105 transition-transform">
             Get Audit <ArrowUpRight size={20}/>
           </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
