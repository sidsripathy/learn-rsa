import Image from 'next/image';
import { dashboardSnapshot } from '@/data/hackathon';
import { SectionHeader } from './SectionHeader';
import { NeonCard } from './NeonCard';

export const DashboardPanel = () => (
  <section id="dashboard" className="mx-auto max-w-6xl px-6 py-16">
    <SectionHeader
      eyebrow="mission status"
      title="Dashboard"
      description="Realtime insights for directors and mentors. Sync across rankings, announcements, and support relays."
      anchor="dashboard"
    />
    <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
      <NeonCard>
        <div className="space-y-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">{dashboardSnapshot.activeRound}</p>
            <p className="mt-3 text-base text-slate-300">{dashboardSnapshot.rankingSummary}</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Announcements</h3>
            <div className="grid gap-4">
              {dashboardSnapshot.announcements.map((item) => (
                <div key={item.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                    <span>{item.category}</span>
                    <span>{item.time}</span>
                  </div>
                  <p className="mt-3 text-base font-semibold text-white">{item.title}</p>
                  <p className="mt-2 text-sm text-slate-300">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </NeonCard>
      <div className="space-y-6">
        <NeonCard>
          <div className="space-y-4 text-sm text-slate-300">
            <h3 className="text-lg font-semibold text-white">Help desk</h3>
            {dashboardSnapshot.helpDeskContacts.map((contact) => (
              <div key={contact.email} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image src={contact.photo} alt={contact.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{contact.name}</p>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">{contact.role}</p>
                  {contact.phone && <p className="text-xs text-slate-300">{contact.phone}</p>}
                  {contact.email && <p className="text-xs text-slate-300">{contact.email}</p>}
                </div>
              </div>
            ))}
          </div>
        </NeonCard>
      </div>
    </div>
  </section>
);
