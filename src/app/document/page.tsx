import React from 'react';
import Layout from '@/components/Document/Layout';
import PageContent from '@/components/Content/PageContent';
import Header from '@/components/Home/Header';

const DocumentPage: React.FC = () => {
  const navItems = ['Home', 'Document', 'Hỗ trợ'];
  return (
    <div className="text-neutral-900">
      <Header title="TPEXPRESS" navItems={navItems} userImage="/user-avatar.jpg" />
      <Layout>
        <PageContent />
      </Layout>
    </div>
  );
};

export default DocumentPage;