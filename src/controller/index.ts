import { container } from 'tsyringe';
import { ExplorerController } from './explorer/explorer';
import { FolderTreeController } from './explorer/folderTree';
import { SearchController } from './search/search';
import { NotificationController } from './notification';
export const explorerController = container.resolve(ExplorerController);
export const searchController = container.resolve(SearchController);
export const folderTreeController = container.resolve(FolderTreeController);
export const notificationController = container.resolve(NotificationController);
