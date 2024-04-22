const AdminUsers = () => {
  return (
    <div className="w-full p-12">
      <h1 className="text-2xl font-bold text-light-title dark:text-dark-title">Users</h1>
      <div className="mt-12">
        <div className="flex w-full items-center justify-between rounded-lg border-b border-gray-300 bg-light px-3 py-4 shadow-md dark:border-gray-700 dark:bg-dark-card">
          <div className="flex flex-col gap-[10px] ">
            <p className="text-base font-medium text-light-title dark:text-dark-title">Hemant</p>
            <p className="text-base font-medium text-light-description dark:text-dark-description">
              hemant412@gmail.com
            </p>
          </div>
          <button className="h-fit rounded-xl border border-black bg-black px-4 py-2 text-sm font-semibold text-white">
            Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;