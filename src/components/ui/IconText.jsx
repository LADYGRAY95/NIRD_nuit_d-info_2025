import { ReactNode } from 'react';

export default function IconText({ icon: Icon, title, children }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="mt-1 flex-shrink-0">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
          <Icon size={20} />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-1 text-gray-600">{children}</p>
      </div>
    </div>
  );
}