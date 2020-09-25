import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {NbDialogService} from '@nebular/theme';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {EmitDraggableItem} from '../../../../../../@core/data/generic.model';

@Component({
  selector: 'app-draggable-items',
  templateUrl: './draggable-items.component.html',
  styleUrls: ['./draggable-items.component.scss']
})
export class DraggableItemsComponent implements OnInit {

  @Input() items: any[] = [];
  @Input() title: string;
  @Input() bindUniqueItemId = 'id';
  @Input() bindDisplayKey;

  // Draggable Child items
  @Input() bindUniqueChildItemId = 'id';
  @Input() bindChildDraggableKey;
  @Input() bindChildDisplayKey;
  @Input() enableChildAdd = false;

  @Input() deleteTemplate: TemplateRef<any>;
  @Input() closeOnBackdropClick = true;

  @Output() itemOnOrderChange: EventEmitter<EmitDraggableItem> = new EventEmitter<EmitDraggableItem>();
  @Output() itemOnEventTrigger: EventEmitter<EmitDraggableItem> = new EventEmitter<EmitDraggableItem>();

  connectedTo = [];

  constructor(private dialogService: NbDialogService) {
  }

  ngOnInit(): void {
    for (const item of this.items) {
      this.connectedTo.push(item[this.bindUniqueItemId]);
    }
  }

  addNewItem(): void {
    const newItem: any = {
      [this.bindUniqueItemId]: null,
      [this.bindDisplayKey]: 'New item',
      ...(this.bindChildDraggableKey) && {[this.bindChildDraggableKey]: []},
    };
    const emitAddItem: EmitDraggableItem = {
      itemId: null,
      item: newItem,
      isEdit: true,
      isNewItem: true,
    };
    this.itemOnEventTrigger.emit(emitAddItem);
  }

  addNewChildItem(parentIndex: number): void {
    const newChildItem: any = {
      [this.bindChildDisplayKey]: 'New Sub-Item'
    };
    const emitAddSubItem: EmitDraggableItem = {
      itemId: this.items[parentIndex][this.bindUniqueItemId],
      item: newChildItem,
      isEdit: true,
      isNewItem: true,
      isSubItem: true
    };
    this.itemOnEventTrigger.emit(emitAddSubItem);
  }

  confirmDelete(dialog: TemplateRef<any>): void {
    this.dialogService.open(dialog, {context: 'pass additional data to dialog', closeOnBackdropClick: this.closeOnBackdropClick});
  }

  deleteItem(dialogRef: any, index: any): void {
    dialogRef.close();
    const emitDeletedItem: EmitDraggableItem = {
      itemId: this.items[index][this.bindUniqueItemId],
      item: this.items[index],
      isDelete: true,
    };
    this.itemOnEventTrigger.emit(emitDeletedItem);
  }

  deleteChildItem(dialogRef: any, parentIndex: number, childIndex: number): void {
    dialogRef.close();
    const deleteSubItem = this.items[parentIndex][this.bindChildDraggableKey][childIndex];
    if (deleteSubItem[this.bindUniqueChildItemId] == null) {
      this.items[parentIndex][this.bindChildDraggableKey].splice(childIndex, 1);
      console.log('Deleted new child-items ', this.items[parentIndex]);
    } else {
      const emitDeletedSubItem: EmitDraggableItem = {
        itemId: this.items[parentIndex][this.bindUniqueItemId],
        item: deleteSubItem,
        isDelete: true,
        isSubItem: true
      };
      this.itemOnEventTrigger.emit(emitDeletedSubItem);
    }
  }

  editItem(itemEdit: any): void {
    const emitEditItem: EmitDraggableItem = {
      itemId: itemEdit[this.bindUniqueItemId],
      item: itemEdit,
      isEdit: true,
      isNewItem: false
    };
    this.itemOnEventTrigger.emit(emitEditItem);
  }

  editSubItem(subItemEdit: any, parentIndex: number): void {
    const emitEditSubItem: EmitDraggableItem = {
      itemId: this.items[parentIndex][this.bindUniqueItemId],
      item: subItemEdit,
      isEdit: true,
      isSubItem: true,
      isNewItem: false
    };
    this.itemOnEventTrigger.emit(emitEditSubItem);
  }

  drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log('items changed within container', event.container.data);
      console.log('current index ', event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      console.log('items changed between different container', event.previousContainer.data, 'to target arr ', event.container.data);
      console.log('prev index ', event.previousIndex, 'current index ', event.currentIndex);
    }
  }

}
