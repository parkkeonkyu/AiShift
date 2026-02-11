import React, { useState } from 'react';

const PermissionManagement = () => {
    // Mock data for roles and permissions
    const [permissions, setPermissions] = useState([
        { id: 1, menu: '회원 관리', read: true, write: true, delete: false },
        { id: 2, menu: '상품 관리', read: true, write: true, delete: true },
        { id: 3, menu: '주문 관리', read: true, write: false, delete: false },
        { id: 4, menu: '게시판 관리', read: true, write: true, delete: false },
    ]);

    const handleCheck = (id, type) => {
        setPermissions(permissions.map(p =>
            p.id === id ? { ...p, [type]: !p[type] } : p
        ));
    };

    return (
        <div className="permission-management">
            <h3>권한 설정 (관리자 그룹: 슈퍼 관리자)</h3>
            <div className="permission-table-container" style={{ overflowX: 'auto', marginTop: '15px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white' }}>
                    <thead>
                        <tr style={{ backgroundColor: '#f2f2f2', borderBottom: '2px solid #ddd' }}>
                            <th style={thStyle}>메뉴명</th>
                            <th style={thStyle}>읽기</th>
                            <th style={thStyle}>쓰기</th>
                            <th style={thStyle}>삭제</th>
                        </tr>
                    </thead>
                    <tbody>
                        {permissions.map((perm) => (
                            <tr key={perm.id} style={{ borderBottom: '1px solid #eee' }}>
                                <td style={tdStyle}>{perm.menu}</td>
                                <td style={tdStyle}>
                                    <input
                                        type="checkbox"
                                        checked={perm.read}
                                        onChange={() => handleCheck(perm.id, 'read')}
                                    />
                                </td>
                                <td style={tdStyle}>
                                    <input
                                        type="checkbox"
                                        checked={perm.write}
                                        onChange={() => handleCheck(perm.id, 'write')}
                                    />
                                </td>
                                <td style={tdStyle}>
                                    <input
                                        type="checkbox"
                                        checked={perm.delete}
                                        onChange={() => handleCheck(perm.id, 'delete')}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div style={{ marginTop: '20px', textAlign: 'right' }}>
                <button style={btnStyle}>저장</button>
            </div>
        </div>
    );
};

const thStyle = {
    padding: '12px',
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#333'
};

const tdStyle = {
    padding: '12px',
    textAlign: 'left'
};

const btnStyle = {
    padding: '10px 20px',
    backgroundColor: '#2ecc71',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
};

export default PermissionManagement;
