import './App.css';
import { Button, Permission, PermissionEnum } from '@luanvuvt/react-shared';

function App() {
  return (
    <div className="App">
      <Button />
      <Permission fallback={<div>Not permission</div>} requiredPermissions={[PermissionEnum.DASHBOARD]}>
        Permission
      </Permission>
    </div>
  );
}

export default App;
