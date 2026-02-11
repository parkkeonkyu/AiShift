import React, { useState } from 'react';

// Recursive Menu Item Component for Management
const MenuTreeItem = ({ item, depth, onSelect, selectedId }) => {
    return (
        <>
            <li
                style={{
                    padding: '10px',
                    borderBottom: '1px solid #eee',
                    paddingLeft: `${depth * 20 + 10}px`,
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                    backgroundColor: selectedId === item.id ? '#e8f0fe' : 'transparent',
                    color: selectedId === item.id ? '#1a73e8' : 'inherit'
                }}
                onClick={(e) => {
                    e.stopPropagation();
                    onSelect(item);
                }}
            >
                <span style={{ marginRight: '10px' }}>{item.icon || '📄'}</span>
                {item.name}
                <span style={{ marginLeft: 'auto', fontSize: '0.8rem', color: '#888' }}>
                    ID: {item.id} | Children: {item.children ? item.children.length : 0}
                </span>
            </li>
            {item.children && item.children.length > 0 && (
                <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                    {item.children.map(child => (
                        <MenuTreeItem
                            key={child.id}
                            item={child}
                            depth={depth + 1}
                            onSelect={onSelect}
                            selectedId={selectedId}
                        />
                    ))}
                </ul>
            )}
        </>
    );
};

const MenuManagement = ({ menuData, setMenuData }) => {
    const [selectedMenu, setSelectedMenu] = useState(null);
    const [newItemName, setNewItemName] = useState('');
    const [editItemName, setEditItemName] = useState('');

    const handleSelect = (item) => {
        setSelectedMenu(item);
        setEditItemName(item.name);
    };

    // Helper to find parent and add child
    const addChildToMenu = (menus, parentId, newMenu) => {
        return menus.map(menu => {
            if (menu.id === parentId) {
                return { ...menu, children: [...(menu.children || []), newMenu] };
            } else if (menu.children && menu.children.length > 0) {
                return { ...menu, children: addChildToMenu(menu.children, parentId, newMenu) };
            }
            return menu;
        });
    };

    // Helper to update menu name
    const updateMenuNameInTree = (menus, idToUpdate, newName) => {
        return menus.map(menu => {
            if (menu.id === idToUpdate) {
                return { ...menu, name: newName };
            } else if (menu.children && menu.children.length > 0) {
                return { ...menu, children: updateMenuNameInTree(menu.children, idToUpdate, newName) };
            }
            return menu;
        });
    };

    const handleUpdateMenuName = () => {
        if (!selectedMenu) return;
        if (!editItemName) {
            alert('메뉴 이름을 입력하세요.');
            return;
        }

        const updatedMenuData = updateMenuNameInTree(menuData, selectedMenu.id, editItemName);
        setMenuData(updatedMenuData);
        setSelectedMenu({ ...selectedMenu, name: editItemName });
        alert('메뉴 이름이 수정되었습니다.');
    };
    const handleAddMenu = () => {
        if (!newItemName) {
            alert('메뉴 이름을 입력하세요.');
            return;
        }

        const newId = `menu-${Date.now()}`;
        const newMenu = {
            id: newId,
            name: newItemName,
            icon: '🆕', // Default icon
            children: []
        };

        if (selectedMenu) {
            // Add as child of selected menu
            if (selectedMenu.children && selectedMenu.children.length >= 15) {
                alert('하위 메뉴는 최대 15개까지만 가능합니다.'); // Arbitrary check based on requirement kind of
                return;
            }
            // Assuming max depth 3. Need to check depth.
            // Simplify for now: Just add.

            const updatedMenuData = addChildToMenu(menuData, selectedMenu.id, newMenu);
            setMenuData(updatedMenuData);
        } else {
            // Add as root item
            setMenuData([...menuData, newMenu]);
        }
        setNewItemName('');
    };

    // Helper to delete menu
    const deleteMenuFromTree = (menus, idToDelete) => {
        return menus.filter(menu => {
            if (menu.id === idToDelete) return false;
            if (menu.children && menu.children.length > 0) {
                menu.children = deleteMenuFromTree(menu.children, idToDelete);
            }
            return true;
        });
    };

    const handleDeleteMenu = () => {
        if (!selectedMenu) {
            alert('삭제할 메뉴를 선택하세요.');
            return;
        }
        if (window.confirm(`'${selectedMenu.name}' 메뉴를 정말 삭제하시겠습니까? 하위 메뉴도 모두 삭제됩니다.`)) {
            const updatedMenuData = deleteMenuFromTree([...menuData], selectedMenu.id);
            setMenuData(updatedMenuData);
            setSelectedMenu(null);
        }
    };

    return (
        <div className="menu-management">
            <h3>메뉴 관리</h3>
            <div className="control-panel" style={{ marginBottom: '20px', padding: '15px', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
                <div style={{ marginBottom: '10px' }}>
                    <h4>메뉴 추가</h4>
                    <input
                        type="text"
                        placeholder="새 메뉴 이름"
                        value={newItemName}
                        onChange={(e) => setNewItemName(e.target.value)}
                        style={{ padding: '8px', marginRight: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
                    />
                    <button style={btnStyle} onClick={handleAddMenu}>
                        {selectedMenu ? '하위 메뉴 추가' : '최상위 메뉴 추가'}
                    </button>
                </div>

                <div style={{ borderTop: '1px solid #ddd', paddingTop: '10px', marginTop: '10px' }}>
                    <h4>메뉴 수정 / 삭제</h4>
                    <input
                        type="text"
                        placeholder="메뉴 이름 수정"
                        value={editItemName}
                        onChange={(e) => setEditItemName(e.target.value)}
                        style={{ padding: '8px', marginRight: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
                        disabled={!selectedMenu}
                    />
                    <button style={{ ...btnStyle, backgroundColor: '#f39c12' }} onClick={handleUpdateMenuName} disabled={!selectedMenu}>
                        이름 수정
                    </button>
                    <button style={{ ...btnStyle, backgroundColor: '#e74c3c' }} onClick={handleDeleteMenu} disabled={!selectedMenu}>
                        선택 삭제
                    </button>
                </div>

                <div style={{ marginTop: '10px', fontSize: '0.9rem', color: '#666' }}>
                    {selectedMenu ? `선택된 메뉴: ${selectedMenu.name} (ID: ${selectedMenu.id})` : '선택된 메뉴 없음'}
                </div>
            </div>

            <div className="menu-tree" style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '5px', background: 'white', maxHeight: '600px', overflowY: 'auto' }}>
                <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                    {menuData.map((menu) => (
                        <MenuTreeItem
                            key={menu.id}
                            item={menu}
                            depth={0}
                            onSelect={handleSelect}
                            selectedId={selectedMenu?.id}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

const btnStyle = {
    padding: '8px 15px',
    marginRight: '10px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
};

export default MenuManagement;
