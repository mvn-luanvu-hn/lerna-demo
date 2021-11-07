import './App.css';
import { Permission, PermissionEnum } from '@luanvuvt/react-shared/permissions';

function App() {
  return (
    <div className="App">
      <Permission fallback={<div>Not permission</div>} requiredPermissions={[PermissionEnum.DASHBOARD]}>
        Permission
      </Permission>
    </div>
  );
}

export default App;
