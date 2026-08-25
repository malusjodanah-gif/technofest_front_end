import { ArrowRight, CheckCircle2, FileText } from "lucide-react";
import { Link } from "react-router-dom";

import PageHeader from "../../components/layout/PageHeader";
import Card from "../../components/ui/Card";

export default function WorkspacePage({ title, description, items = [], links = [] }) {
  return (
    <div className="space-y-6">
      <PageHeader title={title} description={description} />
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <Card key={item.title}>
            <div className="flex gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-beige-200 text-maroon-800">
                {item.icon || <CheckCircle2 size={18} />}
              </div>
              <div>
                <h2 className="font-semibold text-gray-900">{item.title}</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">{item.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
      {links.length > 0 && (
        <Card>
          <h2 className="flex items-center gap-2 font-semibold text-gray-900"><FileText size={18} /> Quick actions</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {links.map((link) => <Link key={link.to} to={link.to} className="inline-flex items-center gap-2 rounded-lg bg-maroon-700 px-4 py-2 text-sm font-semibold text-white hover:bg-maroon-800">{link.label}<ArrowRight size={15} /></Link>)}
          </div>
        </Card>
      )}
    </div>
  );
}