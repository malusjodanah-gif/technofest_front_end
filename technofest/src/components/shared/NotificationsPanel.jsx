import { Bell, Check, CircleAlert, Info, Sparkles } from "lucide-react";
import { useState } from "react";

import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Card from "../ui/Card";
import PageHeader from "../layout/PageHeader";

const iconByType = { success: Check, warning: CircleAlert, info: Info };

export default function NotificationsPanel({ role, items }) {
  const [notifications, setNotifications] = useState(items);
  const unreadCount = notifications.filter((item) => !item.read).length;

  function markAllRead() {
    setNotifications((current) => current.map((item) => ({ ...item, read: true })));
  }

  function toggleRead(id) {
    setNotifications((current) => current.map((item) => item.id === id ? { ...item, read: !item.read } : item));
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="Notifications"
        description={`Updates and reminders for your ${role.toLowerCase()} workspace.`}
        action={<Button variant="outline" onClick={markAllRead} disabled={!unreadCount}><Check size={16} />Mark all read</Button>}
      />
      <Card className="border-maroon-100 bg-maroon-50/40">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-maroon-700 text-white"><Bell size={18} /></div>
          <div><p className="font-semibold text-gray-900">{unreadCount ? `${unreadCount} unread update${unreadCount === 1 ? "" : "s"}` : "You are all caught up"}</p><p className="text-sm text-gray-600">Your latest activity will appear here.</p></div>
        </div>
      </Card>
      <div className="space-y-3">
        {notifications.map((notification) => {
          const Icon = iconByType[notification.type] || Sparkles;
          return (
            <Card key={notification.id} className={notification.read ? "opacity-75" : "border-maroon-200"}>
              <div className="flex gap-4">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-beige-200 text-maroon-800"><Icon size={17} /></div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2"><div><h2 className="font-semibold text-gray-900">{notification.title}</h2><p className="mt-1 text-sm leading-6 text-gray-600">{notification.message}</p></div>{!notification.read && <Badge type="info">New</Badge>}</div>
                  <div className="mt-4 flex items-center justify-between gap-3 text-xs text-gray-500"><span>{notification.createdAt}</span><button type="button" onClick={() => toggleRead(notification.id)} className="font-semibold text-maroon-700 hover:text-maroon-900">{notification.read ? "Mark unread" : "Mark read"}</button></div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}