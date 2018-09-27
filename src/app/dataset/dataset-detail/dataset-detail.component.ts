import { Component, OnInit, Input, ElementRef, ViewChild} from '@angular/core';
import { SessionService } from '../../session/session.service';
import { DatasetService } from '../../jaqpot-client/api/dataset.service';
import { Dataset, FeatureInfo, DataEntry } from '../../jaqpot-client';
import { Subscription } from 'rxjs';
import { DialogsService } from '../../dialogs/dialogs.service';
import { Router } from '@angular/router';
import { MatTableDataSource, MatPaginator} from '@angular/material';
import { Feature } from '../../jaqpot-client/model/feature';
import { DatasetView } from '../../ui-models/datasetView';
import { Config } from '../../config/config';

@Component({
  selector: 'app-dataset-detail',
  templateUrl: './dataset-detail.component.html',
  styleUrls: ['./dataset-detail.component.css']
})
export class DatasetDetailComponent implements OnInit {


  server_base:string;

  dataset_uri:string;

  displayedColumns:string[] = [];
  columns:object[] = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  public _dataset:Dataset;
  dataset_chosen: Dataset;
  subscription:Subscription;
  isLoading:boolean = true;

  checkDatasetModel:boolean = true;
  rowwidth:number=400;

  totalRows:number;
  dataRow:IDataRow;
  dataRows:Array<any> = new Array<any>();

  dataSource = new MatTableDataSource<any>(this.dataRows);

  constructor(private _sessionService:SessionService
              ,private _dialogsService:DialogsService
              ,private _dataService:DatasetService
              ,private _elementRef: ElementRef
              ,private _router:Router) { 
                this.server_base = Config.JaqpotBase;
              }

  ngOnInit() {

    this.dataset_chosen = this._sessionService.getDataset();
    
    this._dataService
        .getDataset(this.dataset_chosen._id, null)
        .subscribe(datasetGot =>{
            this.totalRows = datasetGot.totalRows;
            let featureMap:Map<string, string> = new Map();
            
            datasetGot.features.forEach(feat =>{
              featureMap.set(feat.uri, feat.name)
              
            })
            // console.log(featureMap);
            datasetGot.dataEntry.forEach(dat =>{
              let dataRow:IDataRow = {};
              dataRow.values = {['substance']:dat.compound.name};
              var dict: { [index: string]: string; } = {};
              dict["Substance"] = dat.compound.name;
              
              for(let key in dat.values ){
                let featName = featureMap.get(key);
                let concat = key.split("/");
                dict[featName] = dat.values[key];
                
              }
              this.dataRows.push(dict);

            })
            let dict = this.dataRows[0];
            for (let key in dict) {
              this.displayedColumns.push(key);
            }

            this.isLoading = false;
            this.rowwidth = this.displayedColumns.length * 140;

        }, err=>{ this._dialogsService.onError(err) })
    
  }

  ngAfterViewInit(){
    this.dataset_uri = Config.JaqpotBase +
    '/dataset/' + this.dataset_chosen._id;
    this.dataSource.paginator = this.paginator;
  }

  closeDataset(){

    // this._sessionService.clearModelingDataset();
    this._router.navigate(['/datasets']);
    
  }

  useDataset(){
    this._sessionService.setModelingDataset(this.dataset_chosen)
  }

}

export interface IDataRow {
  
  values?: { [key: string]: any; };

}
